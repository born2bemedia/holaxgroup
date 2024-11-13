import ArrowIcon from "@/icons/other/ArrowIcon";
import Link from "next/link";
import React from "react";

const ConsultingPricelist = () => {
  return (
    <section className="pricelist">
      <div className="_container">
        <div className="pricelist__body">
          <img src="/images/consulting/pricelist.png" alt="image" />
          <div>
            <h2>Download Our Complete Price List</h2>
            <p>
              Interested in understanding our service offerings in detail?
              Download our complete price list to explore the range of
              consulting solutions we provide. Whether you need business
              consulting or marketing consulting services, our transparent
              pricing will help you make informed decisions. Simply click the
              link below to get started.
            </p>
            <Link href="#">Download price list <ArrowIcon /></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingPricelist;
