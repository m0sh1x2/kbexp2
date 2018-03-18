import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: any = [
    {
      "title": "Part 1 - A Big, Warm Welcome",
      "category": "welcome",
      "url": "https://wpxhosting.com/knowledgebase/article/114/part-1---a-big--warm-welcome/"
    },
    {
      "title": "Part 2 - Saving Time and Money",
      "category": "welcome",
      "url": "https://wpxhosting.com/knowledgebase/article/115/part-2---saving-time-and-money/"
    },
    {
      "title": "Part 3 - Free Plugins and Tools",
      "category": "welcome",
      "url": "https://wpxhosting.com/knowledgebase/article/116/part-3---free-plugins-and-tools/"
    },
    {
      "title": "Part 4 - Value",
      "category": "welcome",
      "url": "https://wpxhosting.com/knowledgebase/article/117/part-4---value/"
    },
    {
      "title": "Glossary of Terms",
      "category": "welcome",
      "url": "https://wpxhosting.com/knowledgebase/article/132/glossary-of-terms/"
    },
    {
      "title": "How WPX Hosting Helps 350+ Homeless Dogs Every Day",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/113/how-wpx-hosting-helps-350--homeless-dogs-every-day/"
    },
    {
      "title": "How to Use the Staging Area",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/138/how-to-use-the-staging-area/"
    },
    {
      "title": "What is the WPX Hosting 'Fixed For You' Guarantee?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/141/what-is-the-wpx-hosting-fixed-for-you-guarantee-/"
    },
    {
      "title": "Is Site Migration to WPX Hosting Free & is Email Included?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/51/is-site-migration-to-wpx-hosting-free-is-email-included-/"
    },
    {
      "title": "Can I host my Non-USA (e.g. UK) Website in the USA & Rank in Google in my Country? Can I host my Non-USA (e.g. UK) Website in the USA & Rank in Google in my Country?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/31/can-i-host-my-non-usa-e-g-uk-website-in-the-usa-rank-in-google-in-my-country-/"
    },
    {
      "title": "Does WPX Hosting Keep Backups of Hosted Sites?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/25/does-wpx-hosting-keep-backups-of-hosted-sites-/"
    },
    {
      "title": "Does WPX Hosting Have An Affiliate Program?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/26/does-wpx-hosting-have-an-affiliate-program-/"
    },
    {
      "title": "Do Subdomains & Subfolders Consume 'Hosting Slots' in my WPX Account?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/15/do-subdomains-subfolders-consume-hosting-slots-in-my-wpx-account-/"
    },
    {
      "title": "Can I Purchase Extra IPs from WPX Hosting?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/12/can-i-purchase-extra-ips-from-wpx-hosting-/"
    },
    {
      "title": "Can I use SOAP (Simple Object Access Protocol) with WPX Hosting?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/17/can-i-use-soap-simple-object-access-protocol-with-wpx-hosting-/"
    },
    {
      "title": "Where is WPX Hosting's Datacenter Located?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/32/where-is-wpx-hosting-s-datacenter-located-/"
    },
    {
      "title": "Is WPX Hosting Set Up For SEO Hosting?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/34/is-wpx-hosting-set-up-for-seo-hosting-/"
    },
    {
      "title": "Does WPX Hosting sell SSL Certificates or help with SSL Integration?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/35/does-wpx-hosting-sell-ssl-certificates-or-help-with-ssl-integration-/"
    },
    {
      "title": "Does WPX Hosting Support Ioncube?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/36/does-wpx-hosting-support-ioncube-/"
    },
    {
      "title": "What Is The WPX Hosting Refund Policy?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/39/what-is-the-wpx-hosting-refund-policy-/"
    },
    {
      "title": "How Can I Transfer my Domain to WPX Hosting?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/52/how-can-i-transfer-my-domain-to-wpx-hosting-/"
    },
    {
      "title": "Does WPX Hosting Support PHP 7.x?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/59/does-wpx-hosting-support-php-x-/"
    },
    {
      "title": "What Version Of PHP & MySQL Are Currently Running On WPX Hosting?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/61/what-version-of-php---mysql-are-currently-running-on-wpx-hosting-/"
    },
    {
      "title": "Can I Use phpMyAdmin With A WPX Hosting Account?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/62/can-i-use-phpmyadmin-with-a-wpx-hosting-account-/"
    },
    {
      "title": "Do I need a Content Delivery Network to speed up my Website?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/68/do-i-need-a-content-delivery-network-to-speed-up-my-website-/"
    },
    {
      "title": "Does WPX Hosting offer Free SSL Certificates?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/70/does-wpx-hosting-offer-free-ssl-certificates-/"
    },
    {
      "title": "Did Traffic Planet Hosting change its name to WPX Hosting & Why?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/82/did-traffic-planet-hosting-change-its-name-to-wpx-hosting-why-/"
    },
    {
      "title": "What is the difference between PHP versions?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/99/what-is-the-difference-between-php-versions-/"
    },
    {
      "title": "How to Cancel your WPX Hosting Account",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/94/how-to-cancel-your-wpx-hosting-account/"
    },
    {
      "title": "Billing with WPX Hosting",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/104/billing-with-wpx-hosting/"
    },
    {
      "title": "3 Reasons Why WPX Hosting helps Digital Marketers",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/123/3-reasons-why-wpx-hosting-helps-digital-marketers/"
    },
    {
      "title": "What Happens if I Exceed My Bandwidth Limit?",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/128/what-happens-if-i-exceed-my-bandwidth-limit-/"
    },
    {
      "title": "Create a Video Review of WPX Hosting & get 3 Months of Free Hosting",
      "category": "faq",
      "url": "https://wpxhosting.com/knowledgebase/article/148/create-a-video-review-of-wpx-hosting-get-months-of-free-hosting/"
    },
    {
      "title": "Our Website Migration Policy",
      "category": "migrations",
      "url": "https://wpxhosting.com/knowledgebase/article/56/our-website-migration-policy/"
    },
    {
      "title": "Is Site Migration to WPX Hosting Free & is Email included?",
      "category": "migrations",
      "url": "https://wpxhosting.com/knowledgebase/article/11/is-site-migration-to-wpx-hosting-free-is-email-included-/"
    },
    {
      "title": "Is Site Migration from WP Engine Possible & Free?",
      "category": "migrations",
      "url": "https://wpxhosting.com/knowledgebase/article/16/is-site-migration-from-wp-engine-possible-free-/"
    },
    {
      "title": "How To Transfer a Domain To WPX Hosting",
      "category": "migrations",
      "url": "https://wpxhosting.com/knowledgebase/article/41/how-to-transfer-a-domain-to-wpx-hosting/"
    },
    {
      "title": "How to Complete the New Migration Form (Guide & Video)",
      "category": "migrations",
      "url": "https://wpxhosting.com/knowledgebase/article/112/how-to-complete-the-new-migration-form-guide-video-/"
    },
    {
      "title": "How To Set Up Cron Jobs",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/10/how-to-set-up-cron-jobs/"
    },
    {
      "title": "How to subscribe/re-subscribe for PayPal payments in WPX Hosting? What you should do after Upgrading or Downgrading?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/57/how-to-subscribe-re-subscribe-for-paypal-payments-in-wpx-hosting--what-you-should-do-after-upgrading-or-downgrading-/"
    },
    {
      "title": "How To Use Filezilla For FTP/SFTP With Your WPX Hosting Account?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/63/how-to-use-filezilla-for-ftp-sftp-with-your-wpx-hosting-account-/"
    },
    {
      "title": "How To Change The PHP Version of Your Website",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/76/how-to-change-the-php-version-of-your-website/"
    },
    {
      "title": "How to access WPX Hosting's File Manager and what can you do with it",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/78/how-to-access-wpx-hosting-s-file-manager-and-what-can-you-do-with-it/"
    },
    {
      "title": "How To Create FTP Users",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/79/how-to-create-ftp-users/"
    },
    {
      "title": "How To Add a New Website To Your Hosting Account",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/85/how-to-add-a-new-website-to-your-hosting-account/"
    },
    {
      "title": "How To Install WordPress with One Click",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/86/how-to-install-wordpress-with-one-click/"
    },
    {
      "title": "I want my website SSL enabled with Let's Encrypt – how do I do that?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/88/i-want-my-website-ssl-enabled-with-let-s-encrypt---how-do-i-do-that-/"
    },
    {
      "title": "How Do I Preview a Website Hosted on WPX Hosting without Pointing to the Domain?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/126/how-do-i-preview-a-website-hosted-on-wpx-hosting-without-pointing-to-the-domain-/"
    },
    {
      "title": "How do I Configure my Existing Website with CloudFlare?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/90/how-do-i-configure-my-existing-website-with-cloudflare-/"
    },
    {
      "title": "How To Change Your Main Domain",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/101/how-to-change-your-main-domain/"
    },
    {
      "title": "How to access your Error Logs",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/110/how-to-access-your-error-logs/"
    },
    {
      "title": "How to View Bandwidth, Traffic, and Mail usage for each Website",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/111/how-to-view-bandwidth--traffic--and-mail-usage-for-each-website/"
    },
    {
      "title": "How can I develop a website without pointing it to WPX Hosting?",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/89/how-can-i-develop-a-website-without-pointing-it-to-wpx-hosting-/"
    },
    {
      "title": "How to Upgrade your Hosting Service (the easy way)",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/127/how-to-upgrade-your-hosting-service--the-easy-way-/"
    },
    {
      "title": "Verify your Website in Google Search Console",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/130/verify-your-website-in-google-search-console/"
    },
    {
      "title": "Changing your Google Console Website Address",
      "category": "howto",
      "url": "https://wpxhosting.com/knowledgebase/article/131/changing-your-google-console-website-address/"
    },
    {
      "title": "What is DNS Propagation and why can it take up to 48 hours? -",
      "category": "dns",
      "url": "https://wpxhosting.com/knowledgebase/article/50/what-is-dns-propagation-and-why-can-it-take-up-to-48-hours-/"
    },
    {
      "title": "How To Change Your Site's GoDaddy Nameservers to WPX Hosting -",
      "category": "dns",
      "url": "https://wpxhosting.com/knowledgebase/article/60/how-to-change-your-site-s-godaddy-nameservers-to-wpx-hosting/"
    },
    {
      "title": "How to Point your Domain's Nameservers to WPX in 3 Steps -",
      "category": "dns",
      "url": "https://wpxhosting.com/knowledgebase/article/87/how-to-point-your-domain-s-nameservers-to-wpx/"
    },
    {
      "title": "Setting Up Amazon Cloudfront CDN With Your Wordpress Site -",
      "category": "wordpress",
      "url": "https://wpxhosting.com/knowledgebase/article/6/setting-up-amazon-cloudfront-cdn-with-your-wordpress-site/"
    },
    {
      "title": "Can I Install WordPress Multisite? -",
      "category": "wordpress",
      "url": "https://wpxhosting.com/knowledgebase/article/14/can-i-install-wordpress-multisite-/"
    },
    {
      "title": "Can Gravatars Slow Down A WordPress Blog? -",
      "category": "wordpress",
      "url": "https://wpxhosting.com/knowledgebase/article/23/can-gravatars-slow-down-a-wordpress-blog-/"
    },
    {
      "title": "W3 Total Cache Guide -",
      "category": "wordpress",
      "url": "https://wpxhosting.com/knowledgebase/article/43/w3-total-cache-guide/"
    },
    {
      "title": "Why WPX Hosting recommends W3 Total Cache -",
      "category": "wordpress",
      "url": "https://wpxhosting.com/knowledgebase/article/83/why-wpx-hosting-recommends-w3-total-cache/"
    },
    {
      "title": "What Security Coverage does WPX Hosting Offer? -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/118/what-security-coverage-does-wpx-hosting-offer-/"
    },
    {
      "title": "New 2017 Brute Force Protection Security Measures -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/100/new-2017-brute-force-protection-security-measures/"
    },
    {
      "title": "Why 'Nulled' (Cracked/Pirate) Plugins & Themes are Forbidden on WPX Hosting -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/45/why--nulled---cracked-pirate--plugins---themes-are-forbidden-on-wpx-hosting/"
    },
    {
      "title": "Does WPX Hosting offer DDoS Protection? -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/74/does-wpx-hosting-offer-ddos-protection-/"
    },
    {
      "title": "How to Disable Theme and Plugin File Editing in your Dashboard -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/80/how-to-disable-theme-and-plugin-file-editing-in-your-dashboard/"
    },
    {
      "title": "Protect Your WP Admin Area -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/102/protect-your-wp-admin-area/"
    },
    {
      "title": "My Site has been Hacked & has Malware – What Now? -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/107/my-site-has-been-hacked-has-malware-what-now-/"
    },
    {
      "title": "Avada WordPress Vulnerability -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/124/avada-wordpress-vulnerability/"
    },
    {
      "title": "IP Security Options -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/142/ip-security-options/"
    },
    {
      "title": "Automatic WordPress Updates -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/145/automatic-wordpress-updates/"
    },
    {
      "title": "What is the EU's General Data Protection Regulation (GDPR)? -",
      "category": "security",
      "url": "https://wpxhosting.com/knowledgebase/article/147/what-is-the-eu-s-general-data-protection-regulation-gdpr-/"
    },
    {
      "title": "Setting Up a New WPX Email Account -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/8/setting-up-a-new-wpx-email-account/"
    },
    {
      "title": "How to Access your Free WPX Webmail Account -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/13/how-to-access-your-free-wpx-webmail-account/"
    },
    {
      "title": "Can I Send Bulk Emails From My WPX Hosting Account? -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/28/can-i-send-bulk-emails-from-my-wpx-hosting-account-/"
    },
    {
      "title": "What is the Difference between POP and IMAP Mail Servers? -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/48/what-is-the-difference-between-pop-and-imap-mail-servers-/"
    },
    {
      "title": "How to set up an Email Filter -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/54/how-to-set-up-an-email-filter/"
    },
    {
      "title": "How to Set Up Email Forwarding -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/58/how-to-set-up-email-forwarding/"
    },
    {
      "title": "How to set up Google Apps on your Domain -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/67/how-to-set-up-google-apps-on-your-domain/"
    },
    {
      "title": "How to Setup your Email Account in Mac Mail -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/69/how-to-setup-your-email-account-in-mac-mail/"
    },
    {
      "title": "How to Connect your WPX Email Account with Outlook -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/93/how-to-connect-your-wpx-email-account-with-outlook/"
    },
    {
      "title": "How to Connect Your Email Account with Windows 10 Mail -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/96/how-to-connect-your-email-account-with-windows-10-mail/"
    },
    {
      "title": "How to Connect your WPX Email Account to your Android Smartphone -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/98/how-to-connect-your-wpx-email-account-to-your-android-smartphone/"
    },
    {
      "title": "How to Connect your WPX Email Account with Gmail -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/105/how-to-connect-your-wpx-email-account-with-gmail/"
    },
    {
      "title": "How to Setup Your Email Account In iOS Mail -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/108/how-to-setup-your-email-account-in-ios-mail/"
    },
    {
      "title": "How to Connect your WPX Email Account with Thunderbird -",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/144/how-to-connect-your-wpx-email-account-with-thunderbird/"
    },
    {
      "title": "What If I Mistype Or Mispell A Domain when Buying?",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/22/what-if-i-mistype-or-misspell-a-domain-when-buying-/"
    },
    {
      "title": "What If I See 403 Errors On My Site?",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/24/what-if-i-see-errors-on-my-site-/"
    },
    {
      "title": "Is My Website Displaying An Error To Me Or My Visitors Too?",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/29/is-my-website-displaying-an-error-to-me-or-my-visitors-too-/"
    },
    {
      "title": "The Ups and Downs Of Wordpress Plugins",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/30/the-ups-and-downs-of-wordpress-plugins/"
    },
    {
      "title": "My Site is Down or Runnins Slowly, What Can I Do?",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/37/my-site-is-down-or-running-slowly-what-can-i-do-/"
    },
    {
      "title": "What Are The Limits of WPX's Technical Support?",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/38/what-are-the-limits-of-wpx-s-technical-support-/"
    },
    {
      "title": "Pingdom False Positives",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/139/pingdom-false-positives/"
    },
    {
      "title": "Does WPX Hosting Use CPanel or Another Admin Platform",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/64/does-wpx-hosting-use-cpanel-or-another-admin-platform/"
    },
    {
      "title": "Understanding the Dashboard Menu",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/65/understanding-the-dashboard-menu/"
    },
    {
      "title": "Backup Manager Guide",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/133/backup-manager-guide/"
    },
    {
      "title": "Adding a Developer As a Contact",
      "category": "email",
      "url": "https://wpxhosting.com/knowledgebase/article/134/adding-a-developer-as-a-contact/"
    },
    {
      "title": "New Icann Inter-Registrar Transfer Policy",
      "category": "domains",
      "url": "https://wpxhosting.com/knowledgebase/article/97/new-icann-inter-registrar-transfer-policy/"
    },
    {
      "title": "Domain Expiration and Renewal",
      "category": "domains",
      "url": "https://wpxhosting.com/knowledgebase/article/129/domain-expiration-and-renewal/"
    },
    {
      "title": "The Benefits of WHOIS Privacy",
      "category": "domains",
      "url": "https://wpxhosting.com/knowledgebase/article/135/the-benefits-of-whois-privacy/"
    },
    {
      "title": "Which TLDS Do Not Allow WHOIS Privacy",
      "category": "domains",
      "url": "https://wpxhosting.com/knowledgebase/article/137/which-tlds-do-not-allow-whois-privacy-/"
    },
    {
      "title": "Automatic Domain Renewal",
      "category": "domains",
      "url": "https://wpxhosting.com/knowledgebase/article/146/automatic-domain-renewal/"
    },
    {
      "title": "Does WPX Hosting Offer Servers Located in the UK?",
      "category": "news",
      "url": "https://wpxhosting.com/knowledgebase/article/120/does-wpx-hosting-offer-servers-located-in-the-uk-/"
    },
    {
      "title": "Introducing HTTP/2 And What It Means For You!",
      "category": "news",
      "url": "https://wpxhosting.com/knowledgebase/article/121/introducing-http-2-and-what-it-means-for-you-/"
    },
    {
      "title": "Ransomware Cyber-Attack May 2017",
      "category": "news",
      "url": "https://wpxhosting.com/knowledgebase/article/122/ransomware-cyber-attack-may-2017/"
    },
    {
      "title": "Refund Policy Update (November 2017)",
      "category": "news",
      "url": "https://wpxhosting.com/knowledgebase/article/140/refund-policy-update--november-2017-/"
    }
  ]
}
