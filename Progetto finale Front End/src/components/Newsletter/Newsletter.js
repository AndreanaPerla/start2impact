import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../CustomForm/CustomForm";

const Newsletter = (props) => {
  const postUrl =
    "https://gmail.us6.list-manage.com/subscribe/post?u=4c7642051e3b9909428aaae99&id=08ef41b1fc";

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Newsletter;
