import React from "react";
import styles from "../styles/contact.module.css";

import vdocall from "../assets/vdocall.svg";
import call from "../assets/call.svg";
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <nav className={styles.nav}>
        <div className={styles.profile}>
          <img
            src="https://media-pnq1-1.cdn.whatsapp.net/v/t61.24694-24/386433546_671259698406882_315907325253589501_n.jpg?ccb=11-4&oh=01_AdS_mrgvt-B65RVTnAHF4yJBRHdnrrrMTQzTB6qSj2aoTQ&oe=6540ACA7&_nc_sid=000000&_nc_cat=103"
            alt=""
            className={styles.proPic}
          />
        </div>
        <div className={styles.navActions}>
          <button className={styles.callContainer}>
            <img src={call} alt="" className={styles.call} />
          </button>
          <button className={styles.vdocallContainer}>
            <img src={vdocall} alt="" className={styles.vdocall} />
          </button>
        </div>
      </nav>
      <div className={styles.subnav}>
        <div className={styles.searchDiv}>
          <img src={search} alt="" className={styles.search} />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className={styles.searchinput}
          />
        </div>
        <img src={filter} alt="" className={styles.filter} />
      </div>
      <div className={styles.contactList}>
        <ContactItem
          name="Akshay Joshi"
          image="https://pps.whatsapp.net/v/t61.24694-24/363156548_998052018197466_5212161061311066412_n.jpg?ccb=11-4&oh=01_AdQ2ZblTKBXquzmxihvxOAwQxKaeFCdnDmUQeoJZJmX9_A&oe=653E09AC&_nc_sid=000000&_nc_cat=111"
        />
        <ContactItem
          name="Papa Jio"
          image="https://pps.whatsapp.net/v/t61.24694-24/382460996_282414057955166_6246192944417247249_n.jpg?ccb=11-4&oh=01_AdTezZE_1tx-cOoPw_9OqWE69Oj97gd4oYzm-F7Cta-DXA&oe=653E02DC&_nc_sid=000000&_nc_cat=101"
        />
        <ContactItem
          name="Rohit Joshi"
          image="https://pps.whatsapp.net/v/t61.24694-24/383713801_6899104926778147_8290669105449801489_n.jpg?ccb=11-4&oh=01_AdTWkFlhZZ3KTcC1qrhk5ayTHeQDo7vedlBJoeSSwkC2Kg&oe=653E2501&_nc_sid=000000&_nc_cat=104"
        />
        <ContactItem
          name="Akash"
          image="https://pps.whatsapp.net/v/t61.24694-24/357931957_271588698880508_9201895764181344409_n.jpg?ccb=11-4&oh=01_AdQykru7JXvnHcp63hqoN1ccmPRthfPqEelTAzR_K4WMIQ&oe=653E0BA7&_nc_sid=000000&_nc_cat=110"
        />
        <ContactItem
          name="Papa Idea"
          image="https://pps.whatsapp.net/v/t61.24694-24/370485578_855577959568352_2335943248558933189_n.jpg?ccb=11-4&oh=01_AdRnDF8jvILCZ8c70NVJYbofnia2TlDV0hLJ3TD70eFwew&oe=653E0A74&_nc_sid=000000&_nc_cat=111"
        />
        <ContactItem
          name="Pooja Aatya"
          image="https://pps.whatsapp.net/v/t61.24694-24/382511511_1390764408539072_4669104082147622300_n.jpg?ccb=11-4&oh=01_AdRnzaMLvKZS8P2crrgGoqjZDhsxVQWdiRkkvBWBpdzT1A&oe=653E28DC&_nc_sid=000000&_nc_cat=101"
        />
        <ContactItem
          name="Aaji Jio"
          image="https://pps.whatsapp.net/v/t61.24694-24/300033410_3158566611074087_1694741514252772570_n.jpg?ccb=11-4&oh=01_AdQbW1f4oM7N41C8hixkak7mr1vNF0J05T1H063KFqMgtQ&oe=653E1D1B&_nc_sid=000000&_nc_cat=108"
        />
        <ContactItem
          name="+91 95118 65065"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9uSyeeZkMZ0bdGi0bFSMPz_7CntC_eQsiHqTOQTI_jRySgfWP"
        />
        <ContactItem
          name="II आदर्श ग्रुप II"
          image="https://pps.whatsapp.net/v/t61.24694-24/382460999_1283361132319524_3775009006423493362_n.jpg?ccb=11-4&oh=01_AdRD6pa2RgdM0Od7MSPJvnoWnXn9usoX3600o_9CjpJsxA&oe=653E0CC7&_nc_sid=000000&_nc_cat=108"
        />
        <ContactItem
          name="Balu Kaka"
          image="https://pps.whatsapp.net/v/t61.24694-24/361672165_2541526816002178_404656397575390341_n.jpg?ccb=11-4&oh=01_AdQXvI-6lEGrEIHWmfGDLzx2nMX34lGjbw1UJu5ZCdCnhw&oe=653DFDE1&_nc_sid=000000&_nc_cat=100"
        />
        <ContactItem
          name="Dhananjay Patil"
          image="https://pps.whatsapp.net/v/t61.24694-24/355674411_304783941985546_4657553443168256071_n.jpg?ccb=11-4&oh=01_AdRPcQURWEbvXhdlilJkJJUNdVvUQCnz472WRbaeHGTEnA&oe=653DFBC3&_nc_sid=000000&_nc_cat=109"
        />
        <ContactItem
          name="Shreenivas Naik"
          image="https://pps.whatsapp.net/v/t61.24694-24/359672651_3508213346109822_183223018144917385_n.jpg?ccb=11-4&oh=01_AdS8ZzKezaxLT1y-h34YHVfZtiJq01F7N4bZbC0DKne0DA&oe=653E1126&_nc_sid=000000&_nc_cat=103"
        />
      </div>
    </div>
  );
};

export default Contact;
