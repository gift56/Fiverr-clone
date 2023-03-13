import React from "react";
import client1 from "../../../assets/icons/client1.png";
import client2 from "../../../assets/icons/client2.png";
import client3 from "../../../assets/icons/client3.png";
import client4 from "../../../assets/icons/client4.png";
import client5 from "../../../assets/icons/client5.png";

const Clients = () => {
  const clientsData = [client1, client2, client3, client4, client5];

  return (
    <section className="w-full bg-clientBg py-6">
      <div className="contain">
        <div className="flex items-center justify-center w-full gap-4">
          <h2>Trusted by:</h2>
          <div className="flex items-center justify-start gap-4">
            {clientsData.map((item, i) => (
              <img src={item} alt={i} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
