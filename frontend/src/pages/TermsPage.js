import React from "react";
import { Link } from "react-router-dom";
import "../styles/Terms.css";
import Footer from "../components/Footer";

function TermsPage() {
    return (
        <div className="terms">
            <div className="terms-header">
                <h1>Terms of Use</h1>
                <p>Last updated: July 24, 2021</p>
                <p>Please read these terms of use ("terms", "terms of use") carefully before using Nozama website (the "service") operated by Nozama ("us", 'we", "our").</p>
                <p>Your access to and use of the service is conditioned on your acceptance of and compliance with these terms. These terms apply to all
                    visitors, users and others who access or use the service.</p>
                <p>By accessing or using the service you agree to be bound by these terms. If you disagree with any part of the terms then you may not access
                    the service.</p>
            </div>
            <div className="terms-content">
                <h2>Accounts</h2>
                <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so
                    constitutes a breach of the terms, which may result in immediate termination of your account on our service.</p>
                <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password,
                    whether your password is with our service or a third-party service.</p>
                <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or
                    unauthorized use of your account.</p>
                <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is
                    subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name
                    that is offensive, vulgar or obscene.</p>
                <p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
            </div>
            <div className="terms-content">
                <h2>Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by  Nozama.</p>
                <p>Nozama has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites
                    or services. You further acknowledge and agree that Nozama shall not be responsible or liable, directly or indirectly, for any damage
                    or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or
                    through any such web sites or services.</p>
                <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
            </div>
            <div className="terms-content">
                <h2>Termination</h2>
                <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without
                    limitation if you breach the Terms.</p> 
                <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership
                    provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation
                    if you breach the Terms.</p>
                <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using
                    the Service.</p>
                <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership
                    provisions, warranty disclaimers, indemnity and limitations of liability.</p>
            </div>
            <div className="terms-content">
                <h2>Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law
                    provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is
                    held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire
                    agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
            </div>
            <div className="terms-content">
                <h2>Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at
                    least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree
                    to the new terms, please stop using the Service.</p>
            </div>
            <div className="terms-content">
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
            </div>
        
            
        </div>
    )
}
export default TermsPage;

