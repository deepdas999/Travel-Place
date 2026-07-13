import { Link } from "react-router-dom";

import westBengal from "../assets/states/westbengal.webp";
import odisha from "../assets/states/odisha.jpg";
import rajasthan from "../assets/states/rajasthsan.jpg";
import delhi from "../assets/states/delhi.jpeg";
import uttarPradesh from "../assets/states/up.jpeg";
import tamilNadu from "../assets/states/tamilnadu.jpg";
import kerala from "../assets/states/kerala.jpg";
import goa from "../assets/states/goa.jpg";
import Jammuandkashmir from "../assets/states/khamir.jpg";
import gujarat from "../assets/states/gujarat.jpg";
import punjab from "../assets/states/punjab.jpeg";
import Jharkhand from "../assets/states/Jharkhand.jpeg";

function States() {

  const states = [

    {
      name: "West Bengal",
      slug: "west-bengal",
      image: westBengal,
    },

    {
      name: "Odisha",
      slug: "odisha",
      image: odisha,
    },

    {
      name: "Rajasthan",
      slug: "rajasthan",
      image: rajasthan,
    },

    {
      name: "Delhi",
      slug: "delhi",
      image: delhi,
    },

    {
      name: "Uttar Pradesh",
      slug: "uttar-pradesh",
      image: uttarPradesh,
    },

    {
      name: "Tamil Nadu",
      slug: "tamil-nadu",
      image: tamilNadu,
    },

    {
      name: "Kerala",
      slug: "kerala",
      image: kerala,
    },

    {
      name: "Goa",
      slug: "goa",
      image: goa,
    },

    {
      name: "Jammu and Kashmir",
      slug: "jammu-and-kashmir",
      image: Jammuandkashmir,
    },

    {
      name: "Gujarat",
      slug: "gujarat",
      image: gujarat,
    },

    {
      name: "Punjab",
      slug: "punjab",
      image: punjab,
    },

    {
      name: "Jharkhand",
      slug: "jharkhand",
      image: Jharkhand,
    },

  ];


  return (

    <section className="py-5 bg-light min-vh-100">

      <div className="container">


        <div className="text-center mb-5">

          <h1 className="fw-bold display-5">
            Explore Indian States
          </h1>

          <p className="text-secondary fs-5">
            Choose a state and discover amazing tourist places.
          </p>

        </div>


        <div className="row g-4">

          {states.map((state, index) => (

            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >

              <Link
                to={`/state/${state.slug}`}
                className="text-decoration-none"
              >

                <div className="card h-100 shadow border-0">

                  <img
                    src={state.image}
                    className="card-img-top"
                    alt={state.name}

                    style={{
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />


                  <div className="card-body text-center py-4">

                    <h2 className="fw-bold text-dark">
                      {state.name}
                    </h2>

                  </div>

                </div>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default States;