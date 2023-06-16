import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className='terms-body'>
      <div class='container'>
        <div class='wow-logo'>
          <Link to='/'>
            <img
              class='img-responsive terms-img-logo'
              src={require("../assets/images/wow_logo.png")}
            />
          </Link>
        </div>
        <section class='generic text-center'>
          <h2 className='terms-header'>Privacy and Policies</h2>
          <hr class='hr-mid' />
          <img
            class='img-generic img-responsive'
            style={{ borderRadius: "2rem" }}
            src={require("../assets/images/privacy.jpeg")}
          />
        </section>
        <section class='font-2'>
          <p class='generic-p'>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
            Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex,
            lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus,
            commodo eget turpis at, elementum convallis elit. Pellentesque enim
            turpis, hendrerit tristique.
          </p>
          <p class='generic-p'>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
            rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
            mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
            turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit
            tristique lorem ipsum dolorj.
          </p>
          <p class='generic-p'>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
            rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
            mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu
            massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac,
            pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at,
            elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
            rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
            mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
            turpis.
          </p>
        </section>
      </div>

      <section class='social'>
        <ul>
          <li>
            <a href='#' class='fa fa-facebook fa-2x' aria-hidden='true'></a>
          </li>
          <li>
            <a href='#' class='fa fa-twitter fa-2x' aria-hidden='true'></a>
          </li>
          <li>
            <a href='#' class='fa fa-linkedin fa-2x' aria-hidden='true'></a>
          </li>
          <li>
            <a href='#' class='fa fa-youtube fa-2x' aria-hidden='true'></a>
          </li>
        </ul>
      </section>

      <section class='footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-5 col-md-5 col-sm-5 col-xs-5'>
              <div class='footer-p1'>
                <p class='font-2'>Copy right 2023 by Oly Oli</p>
              </div>
            </div>
            <div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
              <img
                class='img-responsive foot-img'
                src={require("../assets/images/footer-logo.png")}
              />
            </div>
            <div class='col-lg-5 col-md-5 col-sm-5 col-xs-5'>
              <div class='footer-p2'>
                <p class='font-2'>
                  <Link to='/privacy'>Privacy</Link> &<Link to='/terms'>Terms</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
