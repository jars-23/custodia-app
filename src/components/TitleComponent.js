import React from "react";

const TitleComponent = ({ title, subtitle}) => {
  return (
      <>
          <div className="col-md-12">
              <label className="primaryTitle">{title}</label>
          </div>
          <div className="col-md-12 mb-3">
              <label className="secondTitle">{subtitle}</label>
          </div>
      </>
  );
};

export default TitleComponent;