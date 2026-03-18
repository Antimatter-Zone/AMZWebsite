import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import classNames from "classnames";

import {baseURL, dataStyle, effects, fonts, meta, style} from "@/resources/once-ui.config";
import {Background, Column, Flex, Meta, opacity, Schema, SpacingToken} from "@once-ui-system/core";
import {Providers} from '@/components/Providers';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export async function generateMetadata() {
    return Meta.generate({
        title: meta.home.title,
        description: meta.home.description,
        baseURL: baseURL,
        path: meta.home.path,
        canonical: meta.home.canonical,
        image: meta.home.image,
        robots: meta.home.robots,
        alternates: meta.home.alternates,
    });
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            suppressHydrationWarning
            as="html"
            lang="en"
            fillWidth
            className={classNames(
                fonts.heading.variable,
                fonts.body.variable,
                fonts.label.variable,
                fonts.code.variable,
            )}
        >
            <Schema
                as="webPage"
                baseURL={baseURL}
                title={meta.home.title}
                description={meta.home.description}
                path={meta.home.path}
            />
            <head>
                <title>{meta.home.title}</title>
                <script
                    id="theme-init"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const getSafeStorage = () => {
                    const memory = {};
                    const memoryStorage = {
                      getItem: (key) => (Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null),
                      setItem: (key, value) => {
                        memory[key] = String(value);
                      },
                      removeItem: (key) => {
                        delete memory[key];
                      },
                    };

                    try {
                      const existingStorage = window.localStorage;

                      if (
                        existingStorage &&
                        typeof existingStorage.getItem === 'function' &&
                        typeof existingStorage.setItem === 'function' &&
                        typeof existingStorage.removeItem === 'function'
                      ) {
                        return existingStorage;
                      }
                    } catch (storageError) {}

                    try {
                      window.localStorage = memoryStorage;
                    } catch (assignError) {}

                    try {
                      Object.defineProperty(window, 'localStorage', {
                        value: memoryStorage,
                        configurable: true,
                      });
                    } catch (defineError) {}

                    return memoryStorage;
                  };

                  const storage = getSafeStorage();
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                            theme: style.theme,
                            brand: style.brand,
                            accent: style.accent,
                            neutral: style.neutral,
                            solid: style.solid,
                            'solid-style': style.solidStyle,
                            border: style.border,
                            surface: style.surface,
                            transition: style.transition,
                            scaling: style.scaling,
                            'viz-style': dataStyle.variant,
                        })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme or use config default
                  const savedTheme = storage.getItem('data-theme');
                  // Only override with system preference if explicitly set to 'system'
                  const resolvedTheme = savedTheme ? resolveTheme(savedTheme) : config.theme === 'system' ? resolveTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : config.theme;
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = storage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
                    }}
                />
            </head>
            <Providers>
                <Column as="body" fillWidth margin="0" padding="0" style={{background: "var(--page-background)"}}>
                    <Background
                        position="absolute"
                        mask={{
                            x: effects.mask.x,
                            y: effects.mask.y,
                            radius: effects.mask.radius,
                            cursor: effects.mask.cursor,
                        }}
                        gradient={{
                            display: effects.gradient.display,
                            opacity: effects.gradient.opacity as opacity,
                            x: effects.gradient.x,
                            y: effects.gradient.y,
                            width: effects.gradient.width,
                            height: effects.gradient.height,
                            tilt: effects.gradient.tilt,
                            colorStart: effects.gradient.colorStart,
                            colorEnd: effects.gradient.colorEnd,
                        }}
                        dots={{
                            display: effects.dots.display,
                            opacity: effects.dots.opacity as opacity,
                            size: effects.dots.size as SpacingToken,
                            color: effects.dots.color,
                        }}
                        grid={{
                            display: effects.grid.display,
                            opacity: effects.grid.opacity as opacity,
                            color: effects.grid.color,
                            width: effects.grid.width,
                            height: effects.grid.height,
                        }}
                        lines={{
                            display: effects.lines.display,
                            opacity: effects.lines.opacity as opacity,
                            size: effects.lines.size as SpacingToken,
                            thickness: effects.lines.thickness,
                            angle: effects.lines.angle,
                            color: effects.lines.color,
                        }}
                    />
                    <Header/>
                    {children}
                    <Footer/>
                </Column>
            </Providers>
        </Flex>
    );
}
