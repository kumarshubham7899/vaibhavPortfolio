import React, { useState } from "react";
import Services from "../../api/service";
import ServiceSingle from "../ServiceSingle";

const ServiceSection = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };

  return (
    <div className="tp-service-area section-padding">
      <div className="container">
        <div className="tp-section-title">
          <span>Powers</span>
          <h2>My Superpowers</h2>
        </div>
        <div className="tp-service-wrap">
          <div className="row align-items-center">
            {Services.slice(0, 4).map((service, srv) => (
              <div className="col col-lg-3 col-md-6 col-12" key={srv}>
                <div className="tp-service-item">
                  <i className={`fi ${service.icon}`}></i>
                  <h2 onClick={() => handleClickOpen(service)}>
                    {service.sTitle}
                  </h2>
                  <p>{service.description}</p>
                  <button
                    className="read-more"
                    onClick={() => handleClickOpen(service)}
                  >
                    <i className="fi flaticon-right-arrow"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>Services</h1>
      </div>
      <ServiceSingle
        open={open}
        onClose={handleClose}
        title={state.sTitle}
        dImg={state.sImgS}
        sImg1={state.ssImg1}
        sImg2={state.ssImg2}
        des2={state.des2}
        subtitle2={state.subtitle2}
        subtitle2Description={state.subtitle2Description}
        subtitle2Items={state.subtitle2Items}
        subtitle3={state.subtitle3}
        subtitle3Description={state.subtitle3Description}
        subtitle4={state.subtitle4}
        subtitle4Items={state.subtitle4Items}
        description={state.description}
      />
    </div>
  );
};

export default ServiceSection;
