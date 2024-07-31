import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with us",
    description: "Our friendly team is here to help.",
    details: "info@studynotion.com",
    linkType: "email"
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
      linkType: null
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
    linkType: "phone"
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 p-[34px] rounded-xl bg-richblack-800 h-[500px] lg:p-6">       
     {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        let detailElement;

        if (ele.linkType === "email") {
          detailElement = (
            <a href={`mailto:${ele.details}`} className="font-semibold text-richblack-200">
              {ele.details}
            </a>
          );
        } else if (ele.linkType === "phone") {
          detailElement = (
            <a href={`tel:${ele.details}`} className="font-semibold text-richblack-200">
              {ele.details}
            </a>
          );
        } else {
          detailElement = <p className="font-semibold">{ele.details}</p>;
        }

        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            {detailElement}
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails