import {Column, Heading, Line, Meta, Text} from "@once-ui-system/core";

import {baseURL, meta} from "@/resources/once-ui.config";

export function generateMetadata() {
    return Meta.generate({
        title: meta.legal.title,
        description: meta.legal.description,
        baseURL,
        path: meta.legal.path,
        canonical: meta.legal.canonical,
        image: meta.legal.image,
        robots: meta.legal.robots,
        alternates: meta.legal.alternates,
    });
}

export default function LegalPage() {
    return (
        <Column fillWidth center padding="l" gap="xl">
            <Column maxWidth="l" align="center" gap="s">
                <Heading variant="display-strong-l" align="center">
                    Terms of Service and Privacy Policy
                </Heading>
                <Text variant="heading-default-m" align="center" onBackground="neutral-weak">
                    Antimatter Zone LLC follows all applicable laws and regulations.
                </Text>
            </Column>

            <Column maxWidth="xl" gap="l" fillWidth>
                <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
                    <Heading variant="heading-strong-m">Terms of Service</Heading>
                    <Text onBackground="neutral-weak">
                        1. Acceptance of Terms
                        <br/>
                        <br/>
                        These Terms of Service (“Terms”) govern your access to and use of the website operated by
                        AntiMatter Zone LLC (“Company,” “we,” “our,” or “us”), a Washington State limited liability
                        company. By accessing or using this website (“Site”), you agree to be bound by these Terms and
                        all applicable laws and regulations. If you do not agree, you must discontinue use of the Site.
                        <br/>
                        <br/>
                        Use of any specific Company product or project is governed separately by its own Terms of
                        Service and Privacy Policy. In the event of a conflict between these
                        Terms and a product-specific agreement, the product-specific agreement controls.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        2. Eligibility
                        <br/>
                        <br/>
                        You must be at least 13 years old to use the Site. If you are under 13, you may use the Site
                        only with the consent of a parent or legal guardian, consistent with the
                        Children’s Online Privacy Protection Act (COPPA), 15 U.S.C. §§ 6501–6506.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        3. Changes to Terms
                        <br/>
                        <br/>
                        We may modify these Terms at any time. Updates take effect upon posting to the Site.
                        Continued use of the Site constitutes acceptance of the revised Terms.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        4. Use of the Site
                        <br/>
                        <br/>
                        You agree not to engage in unlawful, abusive, or disruptive behavior while using the Site. Prohibited activities include:
                        <br/>
                        <br/>
                        • Attempting to breach or circumvent security measures
                        <br/>
                        • Using automated tools to collect data without permission
                        <br/>
                        • Uploading harmful code or engaging in denial-of-service actions
                        <br/>
                        • Violating any applicable law, including the Computer Fraud and Abuse Act (18 U.S.C. § 1030)
                        <br/>
                        <br/>
                        We reserve the right to suspend or terminate access to the Site at our discretion.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        5. Intellectual Property
                        <br/>
                        <br/>
                        All content on the Site—including text, graphics, logos, images, software, and design—is owned
                        by or licensed to Antimatter Zone LLC and protected by U.S. copyright law (Title 17, U.S.C.),
                        trademark law (Lanham Act, 15 U.S.C. §§ 1051 et seq.), and applicable Washington State laws.
                        <br/>
                        <br/>
                        You may not copy, distribute, modify, or create derivative works from the Site’s
                        content without our explicit written permission.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        6. Links to Third-Party Sites
                        <br/>
                        <br/>
                        The Site may contain links to third-party websites.
                        These are provided for convenience only. We do not endorse or control such
                        sites and are not responsible for their content or policies.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        7. Product- and Project-Specific Policies
                        <br/>
                        <br/>
                        Use of any AntiMatter Zone LLC product, service, or project is governed by separate Terms of
                        Service and a separate Privacy Policy specific to that product.
                        These agreements may include additional conditions related to:
                        <br/>
                        <br/>
                        • Data collection
                        <br/>
                        • User accounts
                        <br/>
                        • Paid features
                        <br/>
                        • Licensing
                        <br/>
                        • User-generated content
                        <br/>
                        <br/>
                        Whenever you interact with or access one of our products, you agree to review and
                        be bound by those specific terms.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        8. Privacy
                        <br/>
                        <br/>
                        Your use of the Site is also governed by our Company-level Privacy Policy.
                        If you use a specific product or project, refer to that product’s separate Privacy Policy.
                        <br/>
                        <br/>
                        Company-level policy complies with applicable federal and Washington State laws, including:
                        <br/>
                        <br/>
                        • Washington State Consumer Protection Act (RCW 19.86)
                        <br/>
                        • Federal Trade Commission Act § 5 (unfair or deceptive practices)
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        9. Disclaimer of Warranties
                        <br/>
                        <br/>
                        The Site is provided “AS IS” and “AS AVAILABLE.”
                        We disclaim all warranties, express or implied, including but not limited to:
                        <br/>
                        <br/>
                        • Merchantability
                        <br/>
                        • Fitness for a particular purpose
                        <br/>
                        • Non-infringement
                        <br/>
                        <br/>
                        Some states do not allow limitations on implied warranties, so these
                        limitations may not apply to you.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        10. Limitation of Liability
                        <br/>
                        <br/>
                        To the fullest extent permitted by law, AntiMatter Zone LLC is not liable for any indirect,
                        incidental, special, consequential, or punitive damages arising from:
                        <br/>
                        <br/>
                        • Use of or inability to use the Site
                        <br/>
                        • Errors or omissions in the Site’s content
                        <br/>
                        • Unauthorized access to or alteration of your data
                        <br/>
                        <br/>
                        This limitation applies even if we have been advised of the possibility of such damages.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        11. Indemnification
                        <br/>
                        <br/>
                        You agree to indemnify and hold harmless AntiMatter Zone LLC, its officers,
                        employees, and partners from any claim or demand arising out of your misuse
                        of the Site or violation of these Terms.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        12. Governing Law and Jurisdiction
                        <br/>
                        <br/>
                        These Terms are governed by the laws of the State of Washington,
                        without regard to conflict-of-law principles.
                        <br/>
                        <br/>
                        Any disputes arising from these Terms or the Site will be resolved exclusively in the
                        state or federal courts located in King County, Washington, and you consent to the
                        personal jurisdiction of those courts.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        14. Termination
                        <br/>
                        <br/>
                        We may suspend or terminate your access to the Site at any time for
                        violations of these Terms or for any business reason.
                    </Text>
                </Column>

                <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
                    <Heading variant="heading-strong-m">Privacy Policy</Heading>
                    <Text onBackground="neutral-weak">
                        This Privacy Policy explains how AntiMatter Zone LLC (“Company,” “we,” “our,” or “us”)
                        collects, uses, stores, and protects information when you use our main company website and
                        the RaindropCentral platform (“Services”).
                        We operate as a Washington State limited liability company.
                        <br/>
                        <br/>
                        Use of any specific Company product or project is governed by its own privacy policy,
                        which may describe additional data practices. In the event of a conflict,
                        the product-specific policy controls.
                        <br/>
                        <br/>
                        We are not affiliated, associated, or endorsed by Microsoft, Mojang, or any of
                        their subsidiaries. Any references to Minecraft are solely for the purpose of product
                        compatibility and descriptive use.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        1. Information We Collect
                        <br/>
                        1.1 Information You Provide
                        <br/>
                        <br/>
                        We may collect information that you voluntarily submit, including:
                        <br/>
                        <br/>
                        • Account registration details (such as username, email, or authentication credentials)
                        <br/>
                        • Profile information within RaindropCentral
                        <br/>
                        • Support inquiries or communication sent to us
                        <br/>
                        <br/>
                        1.2 Payment Information
                        <br/>
                        <br/>
                        Payments for RaindropCentral or related products are handled exclusively through Stripe.
                        <br/>
                        Stripe processes your payment details directly; we do not store your
                        full credit card number or bank information.
                        <br/>
                        <br/>
                        Stripe’s processing follows the Payment Card Industry Data Security Standard (PCI-DSS),
                        and their privacy policy governs their handling of your data.
                        <br/>
                        <br/>
                        1.3 Automatically Collected Information
                        <br/>
                        <br/>
                        When you interact with the Site or RaindropCentral, we may collect:
                        <br/>
                        <br/>
                        • IP address
                        <br/>
                        • Device information
                        <br/>
                        • Browser type and version
                        <br/>
                        • Access times and pages viewed
                        <br/>
                        • Diagnostic, analytics, or performance data
                        <br/>
                        <br/>
                        We may use cookies and similar technologies for functionality, analytics, and security.
                        <br/>
                        <br/>
                        1.4 Product- or Project-Specific Data
                        <br/>
                        <br/>
                        Some products or services may collect additional information such as gameplay statistics,
                        server interactions, plugin configuration details, or user-generated content.
                        <br/>
                        Each product/project will have its own privacy policy explaining those data practices.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        2. How We Use Your Information
                        <br/>
                        <br/>
                        We may use the information we collect to:
                        <br/>
                        <br/>
                        • Provide, operate, and maintain the Site and RaindropCentral
                        <br/>
                        • Authenticate users and manage accounts
                        <br/>
                        • Process payments and verify purchases
                        <br/>
                        • Improve product features, security, and performance
                        <br/>
                        • Respond to support requests
                        <br/>
                        • Prevent fraudulent activity or misuse of our Services
                        <br/>
                        • Comply with legal obligations under U.S. law and Washington State regulations
                        <br/>
                        <br/>
                        We do not sell your personal data.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        3. Legal Basis (for EU/EEA Users, if applicable)
                        <br/>
                        <br/>
                        If you access our Services from the European Union, the legal bases for processing may include:
                        <br/>
                        <br/>
                        • Contract performance
                        <br/>
                        • Legitimate interests
                        <br/>
                        • Consent (for certain analytics or cookies)
                        <br/>
                        • Compliance with legal obligations
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        4. How We Share Information
                        <br/>
                        <br/>
                        We may share information only in the following circumstances:
                        <br/>
                        <br/>
                        4.1 Service Providers
                        <br/>
                        <br/>
                        We share information with trusted vendors who assist in operating the Site or
                        RaindropCentral, including:
                        <br/>
                        <br/>
                        • Stripe (payment processing)
                        <br/>
                        • Hosting providers
                        <br/>
                        • Analytics or security partners
                        <br/>
                        <br/>
                        These providers may only use your information to support our Services.
                        <br/>
                        <br/>
                        4.2 Legal Compliance
                        <br/>
                        <br/>
                        We may disclose information if required to comply with:
                        <br/>
                        <br/>
                        • Washington State law
                        <br/>
                        • Valid subpoenas or court orders
                        <br/>
                        • Applicable U.S. federal regulations
                        <br/>
                        <br/>
                        4.3 Business Transfers
                        <br/>
                        <br/>
                        If we merge, acquire, or sell assets, user information may be transferred as
                        part of the business transition.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        5. Cookies and Tracking Technologies
                        <br/>
                        <br/>
                        We may use cookies, local storage, and similar technologies to:
                        <br/>
                        <br/>
                        • Maintain user sessions
                        <br/>
                        • Analyze website usage
                        <br/>
                        • Improve functionality
                        <br/>
                        • Provide security protections
                        <br/>
                        <br/>
                        Users may disable cookies in their browser settings, though some features
                        may not function properly.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        6. Data Storage and Security
                        <br/>
                        <br/>
                        We implement reasonable security practices in line with industry standards and
                        Washington State regulations, including:
                        <br/>
                        <br/>
                        • Access control
                        <br/>
                        • Encryption in transit
                        <br/>
                        • Secure hosting environments
                        <br/>
                        <br/>
                        Despite these efforts, no system is completely secure.
                        By using the Services, you acknowledge this inherent risk.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        7. Data Retention
                        <br/>
                        <br/>
                        We retain information only as long as necessary to:
                        <br/>
                        <br/>
                        • Provide Services
                        <br/>
                        • Support your account
                        <br/>
                        • Comply with legal obligations (e.g., tax laws)
                        <br/>
                        • Resolve disputes
                        <br/>
                        <br/>
                        You may request deletion of your account or certain data where applicable.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        8. Children’s Privacy
                        <br/>
                        <br/>
                        We do not knowingly collect personal data from children under 13 years old,
                        consistent with the Children’s Online Privacy Protection Act (COPPA).
                        <br/>
                        <br/>
                        If we learn that we have unknowingly collected information from a child under 13,
                        we will delete it promptly.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        9. International Data Transfers
                        <br/>
                        <br/>
                        If you access the Services outside the United States, your information may be
                        transferred to and processed in the U.S.
                        <br/>
                        <br/>
                        We take steps to ensure appropriate safeguards where required by law.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        10. Third-Party Links
                        <br/>
                        <br/>
                        Our Site may include links to external websites we do not control.
                        We are not responsible for their content, privacy practices, or policies.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        11. Your Rights and Choices
                        <br/>
                        <br/>
                        Depending on your location, you may have the right to:
                        <br/>
                        <br/>
                        • Access or correct your information
                        <br/>
                        • Request deletion
                        <br/>
                        • Object to certain processing
                        <br/>
                        • Withdraw consent
                        <br/>
                        • Export or request a copy of your data
                        <br/>
                        <br/>
                        Requests may be submitted to the contact information below.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        12. No Affiliation with Microsoft or Mojang
                        <br/>
                        <br/>
                        AntiMatter Zone LLC, RaindropCentral, and our related tools, plugins,
                        and services are not affiliated, associated, or endorsed by Microsoft, Mojang, or Minecraft.
                        <br/>
                        <br/>
                        Minecraft is a trademark of Mojang AB.
                        Any use of the name is strictly descriptive.
                    </Text>
                    <Line background="neutral-alpha-strong"/>
                    <Text onBackground="neutral-weak">
                        13. Changes to This Policy
                        <br/>
                        <br/>
                        We may update this Privacy Policy from time to time.
                        <br/>
                        Changes take effect upon posting to the Site. Continued use of the
                        Services indicates acceptance of the updated policy.
                    </Text>
                <Column gap="s" background="neutral-strong" padding="l" border="brand-weak">
                    <Heading variant="heading-strong-m">Contact Information</Heading>
                    <Text onBackground="neutral-weak">
                        AntiMatter Zone LLC
                        <br/>
                        Email: contact@antimatterzone.com
                        <br/>
                        Address: 100 N Howard St, Suite R, Spokane, WA 98391
                    </Text>
                </Column>
            </Column>
        </Column>
        </Column>
    );
}
