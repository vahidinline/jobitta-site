<style lang="scss" scoped>
.item {
  h2 {
    margin-bottom: 16px;
  }
  p {
    padding-left: 16px;
  }
}
.questionNumbers {
  @extend .item;
  a {
    color: #000;
    text-decoration: underline;
  }
}
.sticky {
  position: sticky;
  top: 0;
}
</style>
<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex pa-2 md5>
        <v-img class="sticky" :src="require('@/assets/img/privacy.png')"></v-img>
      </v-flex>
      <v-flex pa-2 md7>
        <div class="subtitle-1">
          <p>
            Thank you for choosing to be part of our community at GoDiet. The terms in the Privacy Policy
            ( such as
            <b>GoDiet, “we”, “us”, “our” or “website”</b>) have the same
            meaning as in our Terms and Conditions document. We take your
            privacy seriously and we are committed to protecting and
            safeguarding your personal information. This Privacy Policy applies
            to all information collected through our website and/or any related
            services, sales, marketing or events (we refer to them collectively
            in this privacy notice as "Services"). If you have any questions or
            concerns about this policy, or our practices with regards to your
            personal information, please contact us at info
            <a
              href="mailto:info@GoDiet.eu"
            >info@GoDiet.eu</a>.
          </p>
          <p>
            When you use our website and use our services, you accept and agree
            to both the Terms and Conditions and to the Privacy Policy. If you
            do not agree to be bound to the Privacy Policy you should
            discontinue use of our website and our services. By accessing and
            using our Services you affirm that you have read the Terms and
            Conditions and the Privacy Policy and that you understand, agree and
            acknowledge to all the terms contained in both of them.
          </p>
          <p>
            <b>
              Please read this privacy notice carefully as it will help you
              make informed decisions about sharing your personal information
              with us.
            </b>
          </p>
          <div class="questionNumbers">
            <h2>TABLE OF CONTENTS</h2>
            <p>
              <a @click="scroll(1)">1. WHAT INFORMATION DO WE COLLECT?</a>
            </p>
            <p>
              <a @click="scroll(2)">2. HOW DO WE USE YOUR INFORMATION?</a>
            </p>
            <p>
              <a @click="scroll(3)">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a>
            </p>
            <p>
              <a @click="scroll(4)">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
            </p>
            <p>
              <a @click="scroll(5)">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </p>
            <p>
              <a @click="scroll(6)">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </p>
            <p>
              <a @click="scroll(7)">7. DO WE COLLECT INFORMATION FROM MINORS?</a>
            </p>
            <p>
              <a @click="scroll(8)">8. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </p>
            <p>
              <a @click="scroll(9)">9. CONTROLS FOR DO-NOT-TRACK FEATURES?</a>
            </p>
            <p>
              <a @click="scroll(10)">10. DO WE MAKE UPDATES TO THIS POLICY?</a>
            </p>
            <P>
              <a @click="scroll(11)">11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a>
            </P>
          </div>

          <div class="item" id="one">
            <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
            <p>
              <b>Information collected through our Services</b>
            </p>
            <p>
              In order to allow you to use our services effectively, we may have
              to collect your personally identifiable information (such as, but
              not limited to, your name, phone number, email address, and
              address), billing and payment information, profile information,
              log data (information such as your computer, Internet Protocol
              address (“IP”), pages that you visit and the amount of time spent
              on those pages, actions you take and other statistics), and
              information related to the functioning of consultation sessions
              (collectively the "Information"). You may decide which
              Information, if any, you would like to share with us, but some
              functions of the website may not be available to you without
              providing us the necessary Information. By deciding to provide the
              Information you agree to our methods of collections and use, as
              well to other terms and provisions of this Privacy Policy.
            </p>
            <p>
              Protecting this Information is a top priority for us. We will
              never sell or rent any Information you shared on our website.
              Other than in the limited ways detailed in this Privacy Policy, we
              will never use or disclose any Information unless you specifically
              and explicitly requested or approved us to do so.
            </p>
          </div>
          <div class="item" id="two">
            <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
            <p>
              <b>In Short:</b>We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </p>
            <p>
              We use personal information collected via our services for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations
            </p>
            <p>We use the information we collect or receive:</p>
            <p>
              <b>■ To facilitate account creation and logon process.</b> If you
              choose to link your account with us to a third party account (such
              as your Google or Instagram account), we use the information you
              allowed us to collect from those third parties to facilitate
              account creation and logon process for the performance of the
              contract.
            </p>
            <p>
              <b>To send you marketing and promotional communications.</b>We
              may use the personal information you send to us for our marketing
              purposes, if this is in accordance with your marketing
              preferences. You can opt-out of our marketing emails at any time
              (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).
            </p>

            <p>
              <b>■ To send administrative information to you.</b>
              We may use your personal information to send you product, service
              and new feature information and/or information about changes to
              our terms, conditions, and policies.
            </p>
            <p>
              <b>■ Fulfill and manage your orders.</b>
              We may use your information to fulfill and manage your orders,
              payments, returns, and exchanges made through the Services.
            </p>
            <p>
              <b>■ To provide location-based services.</b>
              We may request access or permission to and track location-based
              information from your mobile device, either continuously or while
              you are using our mobile application, to provide location-based
              services, to display correct time zones for timetabling of
              consultation sessions, and to display relevant currency
              information.
            </p>
            <p>
              <b>■ To post testimonials.</b>
              We post testimonials on our services that may contain personal
              information. Prior to posting a testimonial, we will obtain your
              consent to use your name and testimonial. If you wish to update,
              or delete your testimonial, please contact us at
              <a
                href="mailto:info@GoDiet.eu"
              >info@GoDiet.eu</a>and be sure to include your name, testimonial location, and
              contact information.
            </p>
            <p>
              <b>■ Deliver targeted advertising to you</b>
              We may use your information to develop and display content and
              advertising (and work with third parties who do so) tailored to
              your interests and/or location and to measure its effectiveness.
            </p>
            <p>
              <b>■ Request Feedback.</b>
              We may use your information to request feedback and to contact you
              about your use of our services.
            </p>
            <p>
              <b>
                ■ To enforce our terms, conditions and policies for Business
                Purposes, Legal Reasons and Contractual.
              </b>
            </p>
            <p>
              <b>■ To respond to legal requests and prevent harm</b>
              . If we receive a subpoena or other legal request, we may need to
              inspect the data we hold to determine how to respond.
            </p>
            <p>
              <b>■ To respond to user inquiries/offer support to users</b>
              We may use your information to respond to your inquiries and solve
              any potential issues you might have with the use of our services
            </p>
            <p>
              <b>■ For other Business Purposes.</b>
              We may use your information for other Business Purposes, such as
              data analysis, identifying usage trends, determining the
              effectiveness of our promotional campaigns and to evaluate and
              improve our services, products, marketing and your experience. We
              may use and store this information in aggregated and anonymized
              form so that it is not associated with individual end users and
              does not include personal information. We will not use
              identifiable personal information without your consent.
            </p>
          </div>
          <div class="item" id="three">
            <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
            <p>
              <b>In Short:</b>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>
            <p>We may process or share data based on the following legal basis:</p>
            <p>
              <b>■ Consent:</b>
              We may process your data if you have given us specific consent to
              use your personal information in a specific purpose.
            </p>
            <p>
              <b>■ Legitimate Interests:</b>
              We may process your data when it is reasonably necessary to
              achieve our legitimate business interests.
            </p>
            <p>
              <b>■ Performance of a Contract:</b>
              Where we have entered into a contract with you, we may process
              your personal information to fulfill the terms of our contract.
            </p>
            <p>
              <b>■ Legal Obligations:</b>
              We may disclose your information where we are legally required to
              do so in order to comply with applicable law, governmental
              requests, a judicial proceeding, court order, or legal process,
              such as in response to a court order or a subpoena (including in
              response to public authorities to meet national security or law
              enforcement requirements).
            </p>
            <p>
              <b>■ Vital Interests:</b>
              We may disclose your information where we believe it is necessary
              to investigate, prevent, or take action regarding potential
              violations of our policies, suspected fraud, situations involving
              potential threats to the safety of any person and illegal
              activities, or as evidence in litigation in which we are involved.
              More specifically, we may need to process your data or share your
              personal information in the following situations
            </p>
            <p>
              <b>■ Vendors, Consultants and Other Third-Party Service Providers.</b>
              We may share your data with third party vendors, service
              providers, contractors or agents who perform services for us or on
              our behalf and require access to such information to do that work.
              Examples include: payment processing, data analysis, email
              delivery, hosting services, customer service and marketing
              efforts. We may allow selected third parties to use tracking
              technology on the Services, which will enable them to collect data
              about how you interact with the Services over time. This
              information may be used to, among other things, analyze and track
              data, determine the popularity of certain content and better
              understand online activity. Unless described in this Policy, we do
              not share, sell, rent or trade any of your information with third
              parties for their promotional purposes.
            </p>
            <p>
              <b>■ Business Transfers.</b>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>
            <p>
              <b>■ Third-Party Advertisers.</b>
              We may use third-party advertising companies to serve ads when you
              visit the Services. These companies may use information about your
              visits to our Website(s) and other websites that are contained in
              web cookies and other tracking technologies in order to provide
              advertisements about goods and services of interest to you
            </p>
          </div>
          <div class="item" id="four">
            <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p>
              <b>In Short:</b> We may use cookies and other tracking
              technologies to collect and store your information.
            </p>
            <p>
              Like many websites, we use "cookies" and "web beacons" to collect
              information. A "cookie" is a small data file that is transferred
              to your computer's hard disk for record-keeping purposes. A "web
              beacon" is a tiny image, placed on a Web page or email that can
              report your visit or use. We use cookies and web beacons to enable
              the technical operation of the website, to administer your login
              to your account and to collect the Log Data. You can change your
              browser's settings so it will stop accepting cookies or to prompt
              you before accepting a cookie. However, if you do not accept
              cookies you may not be able to use our Services. We may also use
              third party cookies for the purposes of web analytics, attribution
              and error management to enable us to track and target the
              interests of our users in order to enhance their experience on our
              website.
            </p>
          </div>
          <div class="item" id="five">
            <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>
              <b>In Short:</b> We keep your information for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy
              unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              policy will require us keeping your personal information for
              longer than 2 years past the start of idle period of the user's
              account.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize it, or,
              if this is not possible (for example, because your personal
              information has been stored in backup archives), then we will
              securely store your personal information and isolate it from any
              further processing until deletion is possible.
            </p>
          </div>
          <div class="item" id="six">
            <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p>
              <b>In Short:</b>We aim to protect your personal information
              through a system of organizational and technical security
              measures.
            </p>
            <p>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, please also remember that we
              cannot guarantee that the internet itself is 100% secure. Although
              we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the services within a
              secure environment.
            </p>
          </div>
          <div class="item" id="seven">
            <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p>
              <b>In Short:</b> We do not knowingly collect data from or market
              to children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using our Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we have collected from children
              under age 18, please contact us at
              <a
                href="mailto:info@eGoDiet.eu"
              >info@GoDiet.eu</a>.
            </p>
          </div>
          <div class="item" id="eight">
            <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p>
              <b>In Short:</b> In some regions, such as the European Economic
              Area, you have rights that allow you greater access to and control
              over your personal information. You may review, change, or
              terminate your account at any time.
            </p>
            <p>
              In some regions (like the European Economic Area), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information; and
              (iv) if applicable, to data portability. In certain circumstances,
              you may also have the right to object to the processing of your
              personal information.
            </p>
            <p>
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal.
            </p>
            <p>
              If you are resident in the European Economic Area and you believe
              we are unlawfully processing your personal information, you also
              have the right to complain to your local data protection
              supervisory authority. You can find their contact details
              <a
                href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
              >
                here:
                http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
              </a>
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at
              <a
                href="mailto:info@GoDiet.eu"
              >info@GoDiet</a>.
            </p>
            <p>
              <b>Account Information</b>
            </p>
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <p>■ Log into your account settings and update your user account.</p>
            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, some information may be retained in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with legal requirements
            </p>
            <p>
              <b>
                <u>Cookies and similar technologies:</u>
              </b>
              Most Web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or
              reject cookies, this could affect certain features or services of
              our website.
            </p>
            <p>
              <b>
                <u>Opting out of email marketing:</u>
              </b>
              You can unsubscribe from our marketing email list at any time by
              clicking on the unsubscribe link in the emails that we send or by
              contacting us using the details provided below. You will then be
              removed from the marketing email list – however, we will still
              need to send you service-related emails that are necessary for the
              administration and use of your account. To otherwise opt-out, you
              may contact us at
              <a
                href="mailto:info@eGoDiet"
              >info@GoDiet</a>.
            </p>
            <p>
              Based on the laws of some countries, you may have the right to
              request access to the personal information we collect from you,
              change that information, or delete it in some circumstances. To
              request to review, update, or delete your personal information,
              please contact us at
              <a
                href="mailto:info@GoDiet.eu"
              >info@GoDiet.eu</a>. We
              will respond to your request within 30 days.
            </p>
          </div>
          <div class="item" id="nine">
            <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. No
              uniform technology standard for recognizing and implementing DNT
              signals has been finalized. As such, we do not currently respond
              to DNT browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this privacy notice.
            </p>
          </div>
          <div class="item" id="ten">
            <h2>10. DO WE MAKE UPDATES TO THIS POLICY?</h2>
            <p>
              <b>In Short:</b> Yes, we will update this policy as necessary to
              stay compliant with relevant laws.
            </p>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this Privacy Policy frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
          <div class="item" id="eleven">
            <h2>11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
            <p>
              If you have questions or comments about this policy, you may email
              us at
              <a
                href="mailto:info@GoDiet.eu"
              >info@eGoDiet.eu</a>.
            </p>
            <p>
              If you are a resident in the European Economic Area, the "data
              controller" as defined in the General Data Protection Regulation
              (GDPR) of your personal information is Synergen Ventures Ltd
              trading as GoDiet. You can contact the data controller directly
              regarding the processing of your information, by email at
              <a
                href="mailto:connect@synergenventures.co.uk"
              >connect@synergenventures.co.uk</a>, by phone at +44 (0)2081919088, or by post to:
            </p>
            <p>
              GoDiet,
              <br />Viru Square 2 10111
              <br />Tallinn Harju County
              <br />Estonia
            </p>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  layout: 'insidepage'
})
export default class YourComponent extends Vue {
  scroll(questionsNumber: any) {
    switch (questionsNumber) {
      case 1:
        this.$vuetify.goTo('#one', { offset: 20 })
        break
      case 2:
        this.$vuetify.goTo('#two', { offset: 20 })
        break
      case 3:
        this.$vuetify.goTo('#three', { offset: 20 })
        break
      case 4:
        this.$vuetify.goTo('#four', { offset: 20 })
        break
      case 5:
        this.$vuetify.goTo('#five', { offset: 20 })
        break
      case 6:
        this.$vuetify.goTo('#six', { offset: 20 })
        break
      case 7:
        this.$vuetify.goTo('#seven', { offset: 20 })
        break
      case 8:
        this.$vuetify.goTo('#eight', { offset: 20 })
        break
      case 9:
        this.$vuetify.goTo('#nine', { offset: 20 })
        break
      case 10:
        this.$vuetify.goTo('#ten', { offset: 20 })
        break
      case 11:
        this.$vuetify.goTo('#eleven', { offset: 20 })
        break
    }
  }
}
</script>
