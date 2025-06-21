import React, { Fragment } from "react";
import { Dialog, Grid } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";
import Contact from "./contact";
import Services from "../../api/service";

const ServiceSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  dImg,
  sImg1,
  sImg2,
  des2,
  subtitle2 = "",
  subtitle2Description = "",
  subtitle2Items = [],
  subtitle3 = "",
  subtitle3Description = "",
  subtitle4 = "",
  subtitle4Items = [],
  description = "",
}) => {
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="fa fa-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={onClose}
        ></DialogTitle>
        <Grid className="modalBody modal-body">
          <div className="tp-service-single-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="tp-service-single-wrap">
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-main-img">
                        <img src={dImg} alt="" />
                      </div>
                      <div className="tp-service-single-title">
                        <h3>{title}</h3>
                      </div>
                      <p>{des2}</p>
                      <div className="row mt-4">
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <img src={sImg1} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <img src={sImg2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-service-single-item list-widget">
                      <div className="tp-service-single-title">
                        <h3>{subtitle2}</h3>
                      </div>
                      <p>{subtitle2Description}</p>
                      <ul>
                        {subtitle2Items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-title">
                        <h3>{subtitle3}</h3>
                      </div>
                      <p>{subtitle3Description}</p>
                    </div>
                    <div className="tp-service-single-item list-widget">
                      <div className="tp-service-single-title">
                        <h3>{subtitle4}</h3>
                      </div>
                      <ul>
                        {subtitle4Items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-title">
                        <h3>Related Service</h3>
                      </div>
                      <div className="tp-service-area">
                        <div className="row align-items-center">
                          {Services.slice(0, 3).map((service, srv) => (
                            <div className="col-lg-4 col-md-6 col-12" key={srv}>
                              <div className="tp-service-item">
                                <i className={`fi ${service.icon}`}></i>
                                <h2>{service.sTitle}</h2>
                                <p>{service.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-contact-area">
                        <div className="tp-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
                        </div>
                        <div className="tp-contact-form-area">
                          <Contact />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ServiceSingle;
