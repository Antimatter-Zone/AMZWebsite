"use client";

import {
    BorderStyle,
    ChartMode,
    ChartVariant,
    DataThemeProvider,
    IconProvider,
    LayoutProvider,
    NeutralColor,
    ScalingSize,
    Schemes,
    SolidStyle,
    SolidType,
    SurfaceStyle,
    Theme,
    ThemeProvider,
    ToastProvider,
    TransitionStyle
} from "@once-ui-system/core";
import {dataStyle, style} from "@/resources/once-ui.config";
import {iconLibrary} from "@/resources/icons";

type StorageLike = {
    clear: () => void;
    getItem: (key: string) => string | null;
    key: (index: number) => string | null;
    readonly length: number;
    removeItem: (key: string) => void;
    setItem: (key: string, value: string) => void;
};

function createMemoryStorage(): StorageLike {
    const store = new Map<string, string>();

    return {
        clear() {
            store.clear();
        },
        getItem(key) {
            return store.get(key) ?? null;
        },
        key(index) {
            const keys = [...store.keys()];
            return keys[index] ?? null;
        },
        get length() {
            return store.size;
        },
        removeItem(key) {
            store.delete(key);
        },
        setItem(key, value) {
            store.set(key, String(value));
        },
    };
}

const fallbackStorage = createMemoryStorage();

function isStorageLike(value: unknown): value is StorageLike {
    if (!value || typeof value !== "object") {
        return false;
    }

    const candidate = value as Partial<StorageLike>;

    return (
        typeof candidate.getItem === "function" &&
        typeof candidate.setItem === "function" &&
        typeof candidate.removeItem === "function" &&
        typeof candidate.clear === "function"
    );
}

function ensureLocalStorageCompat() {
    const globalTarget = globalThis as Record<string, unknown>;
    const currentStorage = globalTarget.localStorage;

    if (isStorageLike(currentStorage)) {
        return;
    }

    if (currentStorage && typeof currentStorage === "object") {
        const mutableStorage = currentStorage as Record<string, unknown>;

        try {
            if (typeof mutableStorage.getItem !== "function") {
                mutableStorage.getItem = fallbackStorage.getItem.bind(fallbackStorage);
            }
            if (typeof mutableStorage.setItem !== "function") {
                mutableStorage.setItem = fallbackStorage.setItem.bind(fallbackStorage);
            }
            if (typeof mutableStorage.removeItem !== "function") {
                mutableStorage.removeItem = fallbackStorage.removeItem.bind(fallbackStorage);
            }
            if (typeof mutableStorage.clear !== "function") {
                mutableStorage.clear = fallbackStorage.clear.bind(fallbackStorage);
            }
            if (typeof mutableStorage.key !== "function") {
                mutableStorage.key = fallbackStorage.key.bind(fallbackStorage);
            }

            if (isStorageLike(mutableStorage)) {
                return;
            }
        } catch {}
    }

    try {
        globalTarget.localStorage = fallbackStorage;

        if (isStorageLike(globalTarget.localStorage)) {
            return;
        }
    } catch {}

    try {
        Object.defineProperty(globalThis, "localStorage", {
            value: fallbackStorage,
            configurable: true,
            enumerable: true,
            writable: true,
        });

        if (isStorageLike((globalThis as Record<string, unknown>).localStorage)) {
            return;
        }
    } catch {}
}

export function Providers({children}: { children: React.ReactNode }) {
    ensureLocalStorageCompat();

    return (
        <LayoutProvider>
            <ThemeProvider
                theme={style.theme as Theme}
                brand={style.brand as Schemes}
                accent={style.accent as Schemes}
                neutral={style.neutral as NeutralColor}
                solid={style.solid as SolidType}
                solidStyle={style.solidStyle as SolidStyle}
                border={style.border as BorderStyle}
                surface={style.surface as SurfaceStyle}
                transition={style.transition as TransitionStyle}
                scaling={style.scaling as ScalingSize}
            >
                <DataThemeProvider
                    variant={dataStyle.variant as ChartVariant}
                    mode={dataStyle.mode as ChartMode}
                    height={dataStyle.height}
                    axis={{
                        stroke: dataStyle.axis.stroke
                    }}
                    tick={{
                        fill: dataStyle.tick.fill,
                        fontSize: dataStyle.tick.fontSize,
                        line: dataStyle.tick.line
                    }}
                >
                    <ToastProvider>
                        <IconProvider icons={iconLibrary}>
                            {children}
                        </IconProvider>
                    </ToastProvider>
                </DataThemeProvider>
            </ThemeProvider>
        </LayoutProvider>
    );
}
