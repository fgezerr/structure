import React from "react";
import "./İndex.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Christianoronaldo from "../../components/Projelerimiz/Christianoronaldo";
import Gmerveozkan from "../../components/Projelerimiz/Gmerveozkan";
import Hasanturgut from "../../components/Projelerimiz/Hasanturgut";
import Johndoe from "../../components/Projelerimiz/Johndoe";
import Lionelmessi from "../../components/Projelerimiz/Lionelmessi";
import Mehmetgezer from "../../components/Projelerimiz/Mehmetgezer";
import Mfatihgezer from "../../components/Projelerimiz/Mfatihgezer";
import Zlatanibrahimovic from "../../components/Projelerimiz/Zlatanibrahimovic";

function İndex() {
  return (
    <div className="_index">
      <div
        className="_index_menu"
      >
        <div
          className="_index_menu_"
        >
          <div>
            <h5>Hakkımızda</h5>
          </div>
          <div>
            <span>
              <Link to="/">
                <h6>
                  Anasayfa /
                </h6>
              </Link>
              <span>Projelerimiz</span>
            </span>
          </div>
        </div>
      </div>
      <div className="_tabs">
        <div class="d-flex _tabs_menu">
          <div
            class="nav flex-column nav-pills _tabs_menu_"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              MUHAMMED FATİH GEZER
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              G.MERVE ÖZKAN
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              MEHMET GEZER
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              ZLATAN IBRAHIMOVIC
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              HASAN TURĞUT
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              JOHN DOE
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              LİONEL MESSİ
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              CHRİSTİANO RONALDO
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <Mfatihgezer />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <Gmerveozkan />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              <Mehmetgezer />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <Zlatanibrahimovic />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <Hasanturgut />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <Johndoe />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <Lionelmessi />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <Christianoronaldo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default İndex;
