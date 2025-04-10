import React from "react";
import classes from "./contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const personalInfos = [
  { Icon: LocationOnOutlinedIcon, title: "Address", desc: "Virginia, US" },
  { Icon: LocalPhoneOutlinedIcon, title: "Phone", desc: "(571)-507-5568" },
  {
    Icon: EmailIcon,
    title: "Email",
    desc: "mdawit384@gmail.com",
  },
];
export default function Contact() {
  return (
    <section className={classes.contact_container} id="Contact">
      <div className={classes.contact_wrapper}>
        <div className={classes.title_wrapper}>
          <div className={classes.title}>
            <h1>Contacts</h1>
          </div>
          <div className={classes.hr_liner}>
            <hr />
          </div>
        </div>

        <div className={classes.Information_details}>
          <div>
            <h1>
              If you want to get in touch with me and if u wanna know more about
              me
            </h1>
            <p>Feel free to call me on socials or message me</p>
          </div>

          <div>
            {personalInfos.map((infos, i) => (
              <div>
                <div className={classes.icons_desc}>
                  <infos.Icon fontSize="large" />
                  {infos.title}:
                </div>
                <div className={classes.description}>
                  <p>{infos.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
