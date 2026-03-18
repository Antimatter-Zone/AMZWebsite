import {
    Background,
    Button,
    Column,
    Grid,
    Heading,
    Icon,
    Meta,
    Row,
    Text,
} from "@once-ui-system/core";
import {baseURL, meta} from "@/resources/once-ui.config";
import ContactForm from "./ContactForm";

export function generateMetadata() {
    return Meta.generate({
        title: meta.contact.title,
        description: meta.contact.description,
        baseURL,
        path: meta.contact.path,
        canonical: meta.contact.canonical,
        image: meta.contact.image,
        robots: meta.contact.robots,
        alternates: meta.contact.alternates,
    });
}

const contacts = [
    {
        title: "Chat on Discord",
        description: "Join our community and chat with others.",
        icon: "discord",
        link: {
            label: "Join Discord",
            href: "https://discord.gg/6F6EM6rK2r",
        },
    },
    {
        title: "Send an email",
        description: "Get in touch with us for help or feedback.",
        icon: "email",
        link: {
            label: "Send email",
            href: "mailto:contact@antimatterzone.com",
        },
    },
];

export default function ContactPage() {
    return (
        <Row fillWidth fitHeight horizontal="center">
            <Column fillWidth horizontal="center" maxWidth="m">
                <Row
                    fillWidth
                    horizontal="center"
                    borderTop="neutral-medium"
                    borderX="neutral-medium"
                    paddingX="l"
                    paddingY="24"
                    textVariant="body-default-s"
                    onBackground="brand-weak"
                >
                    Contact
                </Row>

                <Row fillWidth horizontal="center" borderTop="neutral-medium" borderX="neutral-medium">
                    <Column maxWidth="xs" gap="16" paddingY="48" paddingX="24">
                        <Heading variant="display-strong-s" align="center">
                            Get in touch
                        </Heading>
                        <Text variant="body-default-xl" align="center" wrap="balance" onBackground="neutral-weak">
                            We're always here to help
                        </Text>
                    </Column>
                </Row>

                <Grid
                    fillWidth
                    borderTop="neutral-medium"
                    borderLeft="neutral-medium"
                    columns="2"
                    s={{columns: "1"}}
                >
                    {contacts.map((contact, index) => (
                        <Column
                            padding="24"
                            borderRight="neutral-medium"
                            borderBottom="neutral-medium"
                            key={index}
                            fillWidth
                            gap="8"
                        >
                            <Background
                                position="absolute"
                                left="0"
                                top="0"
                                mask={{x: 75, y: -50, radius: 20}}
                                grid={{display: true, width: "8px", height: "8px", color: "neutral-border-medium"}}
                            />
                            <Icon
                                name={contact.icon}
                                size="s"
                                padding="12"
                                radius="full"
                                background="brand-alpha-weak"
                                onBackground="brand-weak"
                            />
                            <Heading marginTop="16" marginLeft="12" as="h3" variant="heading-strong-l">
                                {contact.title}
                            </Heading>
                            <Text
                                marginBottom="16"
                                marginLeft="12"
                                onBackground="neutral-medium"
                                variant="body-default-s"
                                wrap="balance"
                            >
                                {contact.description}
                            </Text>
                            <Button
                                weight="default"
                                size="s"
                                href={contact.link.href}
                                variant="secondary"
                            >
                                {contact.link.label}
                            </Button>
                        </Column>
                    ))}
                </Grid>

                <Row fillWidth height="16" borderLeft="neutral-medium" borderRight="neutral-medium"/>

                <Row border="neutral-medium" m={{direction: "column"}}>
                    <Column fillWidth>
                        <ContactForm/>
                    </Column>

                    <Column fillWidth minHeight={32}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8!2d-117.4260!3d47.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM5JzMxLjciTiAxMTfCsDI1JzMzLjYiVw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{border: 0, display: "block"}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Column>
                </Row>
            </Column>
        </Row>
    );
}
