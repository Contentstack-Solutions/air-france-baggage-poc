import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../utils";
import { htmlToJson } from "@contentstack/json-rte-serializer";

function InformationCard() {
  return (
    <bw-information-area-template className="bw-information-area-block bw-information-area-template ng-star-inserted">
      <bw-information-card-wrapper className="bw-information-card-wrapper ng-star-inserted">
        <div className="bw-information-card-wrapper__container bw-information-card-wrapper__container--medium-column bw-information-card-wrapper__container--mobile-slide ng-star-inserted">
          <bw-information-card-template className="bw-information-section-card ng-star-inserted">
            <a
              className="bwc-card-link bw-information-section-card__link ng-star-inserted"
              aria-describedby="false"
              aria-haspopup="true"
              aria-label
              href="/en/information/bagages/recommandations-pour-vos-bagages"
            >
              <mat-card className="mat-card mat-focus-indicator ng-star-inserted">
                <bwc-content-image
                  bwdeferload="setImageSource"
                  mat-card-image
                  className="mat-card-image bw-information-section-card__image ng-star-inserted"
                  _nghost-server-app-c150
                >
                  <img
                    _ngcontent-server-app-c150
                    loading="lazy"
                    className="bwc-content-image"
                    alt="preparation-bagage"
                    src="https://img.static-af.com/images/media/5641F98A-60C3-47C1-AF113C7F36E998A4/?w=320&aspect_ratio=2:1"
                    srcSet="
                      https://img.static-af.com/images/media/5641F98A-60C3-47C1-AF113C7F36E998A4/?w=120&aspect_ratio=2:1 360w,
                      https://img.static-af.com/images/media/5641F98A-60C3-47C1-AF113C7F36E998A4/?w=200&aspect_ratio=2:1 600w,
                      https://img.static-af.com/images/media/5641F98A-60C3-47C1-AF113C7F36E998A4/?w=256&aspect_ratio=2:1 768w,
                      https://img.static-af.com/images/media/5641F98A-60C3-47C1-AF113C7F36E998A4/?w=320&aspect_ratio=2:1 960w
                    "
                    style={{ aspectRatio: "2 / 1" }}
                  />
                </bwc-content-image>
                <mat-card-content className="mat-card-content">
                  <div className="bw-information-section-card__icon-container ng-star-inserted">
                    <bwc-icon
                      color="primary"
                      scale={2}
                      className="bw-information-section-card__icon bwc-icon--cabin-baggage"
                      style={{ fontSize: "2rem" }}
                    >
                      <mat-icon
                        role="img"
                        className="mat-icon notranslate mat-primary"
                        aria-hidden="true"
                        data-mat-icon-type="svg"
                        data-mat-icon-name="cabin-baggage-af"
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 16 21"
                          xmlns="http://www.w3.org/2000/svg"
                          fit
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path d="M13.276 9.546h-2.849a3.003 3.003 0 0 0-.42-1.268c-.269-.424-.642-.726-.657-.74-.38-.323-.637.116-.748.489.545.328.91.888.988 1.519H5.54c.042-.357.181-.685.385-.961l-.659-.517c-.323.43-.518.942-.563 1.478h-2.85A1.859 1.859 0 0 0 0 11.399v7.747c0 1.019.834 1.853 1.853 1.853h11.423a1.858 1.858 0 0 0 1.853-1.852v-7.748c0-1.02-.834-1.854-1.853-1.854M9.71 3.587L6.48 2.195 6.996.999l3.23 1.39z" />
                          <path d="M7.95 8.205s.316-.994.587-1.187c.222-.158.554-.408 1.464.417.083-.453.13-1.075-.084-1.572-.33-.767-.815-1.922-.815-1.922l-2.53-1.026s-1.103 1.83-1.405 3.318c-.157.772-.032 1.202 1.102 1.988.228.16.498.332.816.524.194.12.5.22.808.16a7.34 7.34 0 0 0 .685-.193c-.2-.18-.41-.35-.629-.507" />
                        </svg>
                      </mat-icon>
                    </bwc-icon>
                  </div>
                  <div className="bw-information-section-card__content">
                    <div className="bw-information-section-card__title">
                      <bw-information-title className="ng-star-inserted">
                        <span className="bw-information-section-card__card-title bwc-o-title">
                          <rjf-title className="bw-rjf-title ng-star-inserted">
                            <span>Preparing your hand and checked baggage</span>
                          </rjf-title>
                        </span>
                      </bw-information-title>
                    </div>
                    <bw-information-section-template className="bw-information-section">
                      <div>
                        <div className="bw-information-section__content-container">
                          <rjf-paragraph className="bw-rjf-paragraph ng-star-inserted">
                            <p className="bwc-o-body">
                              Follow our recommendations to pack your bags with
                              peace of mind.
                            </p>
                          </rjf-paragraph>
                        </div>
                      </div>
                    </bw-information-section-template>
                  </div>
                </mat-card-content>
                <mat-card-actions
                  align="end"
                  className="mat-card-actions mat-card-actions-align-end ng-star-inserted"
                >
                  <span className="bw-information-section-card__action-link">
                    FIND OUT MORE
                  </span>
                </mat-card-actions>
              </mat-card>
            </a>
          </bw-information-card-template>
          <bw-information-card-template className="bw-information-section-card ng-star-inserted">
            <a
              className="bwc-card-link bw-information-section-card__link ng-star-inserted"
              aria-describedby="false"
              aria-haspopup="true"
              aria-label
              href="/en/information/bagages/recommandations-pour-vos-bagages"
            >
              <mat-card className="mat-card mat-focus-indicator ng-star-inserted">
                <bwc-content-image
                  bwdeferload="setImageSource"
                  mat-card-image
                  className="mat-card-image bw-information-section-card__image ng-star-inserted"
                  _nghost-server-app-c150
                >
                  <img
                    _ngcontent-server-app-c150
                    loading="lazy"
                    className="bwc-content-image"
                    alt="identifier-bagage"
                    src="https://img.static-af.com/images/media/300975FE-FCCF-4210-B6A84CAF8D730C50/?w=320&aspect_ratio=2:1"
                    srcSet="
                      https://img.static-af.com/images/media/300975FE-FCCF-4210-B6A84CAF8D730C50/?w=120&aspect_ratio=2:1 360w,
                      https://img.static-af.com/images/media/300975FE-FCCF-4210-B6A84CAF8D730C50/?w=200&aspect_ratio=2:1 600w,
                      https://img.static-af.com/images/media/300975FE-FCCF-4210-B6A84CAF8D730C50/?w=256&aspect_ratio=2:1 768w,
                      https://img.static-af.com/images/media/300975FE-FCCF-4210-B6A84CAF8D730C50/?w=320&aspect_ratio=2:1 960w
                    "
                    style={{ aspectRatio: "2 / 1" }}
                  />
                </bwc-content-image>
                <mat-card-content className="mat-card-content">
                  <div className="bw-information-section-card__icon-container ng-star-inserted">
                    <bwc-icon
                      color="primary"
                      scale={2}
                      className="bw-information-section-card__icon bwc-icon--checked-baggage"
                      style={{ fontSize: "2rem" }}
                    >
                      <mat-icon
                        role="img"
                        className="mat-icon notranslate mat-primary"
                        aria-hidden="true"
                        data-mat-icon-type="svg"
                        data-mat-icon-name="checked-baggage-af"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 17 15"
                          fit
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.396 9.546H9.658V2.203h.906v.604h.915v-.604h.917v7.343zM9.09 2.808H6.382V1.759c0-.437.356-.793.794-.793h2.606c.384 0 .705.273.778.634H9.09v1.208zm3.938 0V1.6h-1.55A1.705 1.705 0 0 0 9.781.057H7.176c-.939 0-1.703.764-1.703 1.702v1.049H2.415A1.964 1.964 0 0 0 .48 4.766L.456 13.04c0 1.078.881 1.96 1.96 1.96h12.076c1.078 0 1.96-.882 1.96-1.96l.023-8.274c0-1.07-.868-1.945-1.935-1.958h-1.512z"
                          />
                        </svg>
                      </mat-icon>
                    </bwc-icon>
                  </div>
                  <div className="bw-information-section-card__content">
                    <div className="bw-information-section-card__title">
                      <bw-information-title className="ng-star-inserted">
                        <span className="bw-information-section-card__card-title bwc-o-title">
                          <rjf-title className="bw-rjf-title ng-star-inserted">
                            <span>
                              How to guarantee the identification of your
                              baggage in the hold
                            </span>
                          </rjf-title>
                        </span>
                      </bw-information-title>
                    </div>
                    <bw-information-section-template className="bw-information-section">
                      <div>
                        <div className="bw-information-section__content-container">
                          <rjf-paragraph className="bw-rjf-paragraph ng-star-inserted">
                            <p className="bwc-o-body">
                              Review our recommendations for your baggage to be
                              identified in all instances.
                            </p>
                          </rjf-paragraph>
                        </div>
                      </div>
                    </bw-information-section-template>
                  </div>
                </mat-card-content>
                <mat-card-actions
                  align="end"
                  className="mat-card-actions mat-card-actions-align-end ng-star-inserted"
                >
                  <span className="bw-information-section-card__action-link">
                    FIND OUT MORE
                  </span>
                </mat-card-actions>
              </mat-card>
            </a>
          </bw-information-card-template>
          <bw-information-card-template className="bw-information-section-card ng-star-inserted">
            <a
              className="bwc-card-link bw-information-section-card__link ng-star-inserted"
              aria-describedby="false"
              aria-haspopup="true"
              aria-label
              href="/en/information/bagages/recommandations-pour-vos-bagages"
            >
              <mat-card className="mat-card mat-focus-indicator ng-star-inserted">
                <bwc-content-image
                  bwdeferload="setImageSource"
                  mat-card-image
                  className="mat-card-image bw-information-section-card__image ng-star-inserted"
                  _nghost-server-app-c150
                >
                  <img
                    _ngcontent-server-app-c150
                    loading="lazy"
                    className="bwc-content-image"
                    alt="tablette-a-bord"
                    src="https://img.static-af.com/images/media/F8AD0E0B-F051-4829-B5D7C456073DAB1D/?w=320&aspect_ratio=2:1"
                    srcSet="
                      https://img.static-af.com/images/media/F8AD0E0B-F051-4829-B5D7C456073DAB1D/?w=120&aspect_ratio=2:1 360w,
                      https://img.static-af.com/images/media/F8AD0E0B-F051-4829-B5D7C456073DAB1D/?w=200&aspect_ratio=2:1 600w,
                      https://img.static-af.com/images/media/F8AD0E0B-F051-4829-B5D7C456073DAB1D/?w=256&aspect_ratio=2:1 768w,
                      https://img.static-af.com/images/media/F8AD0E0B-F051-4829-B5D7C456073DAB1D/?w=320&aspect_ratio=2:1 960w
                    "
                    style={{ aspectRatio: "2 / 1" }}
                  />
                </bwc-content-image>
                <mat-card-content className="mat-card-content">
                  <div className="bw-information-section-card__icon-container ng-star-inserted">
                    <bwc-icon
                      color="primary"
                      scale={2}
                      className="bw-information-section-card__icon bwc-icon--multi-devices"
                      style={{ fontSize: "2rem" }}
                    >
                      <mat-icon
                        role="img"
                        className="mat-icon notranslate mat-primary"
                        aria-hidden="true"
                        data-mat-icon-type="svg"
                        data-mat-icon-name="multi-devices-af"
                      >
                        <svg
                          height="100%"
                          viewBox="0 0 21 12"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          fit
                          preserveAspectRatio="xMidYMid meet"
                          focusable="false"
                        >
                          <path d="m8.387 9.573a.339.339 0 1 0 .037-.677.339.339 0 0 0 -.037.677zm-3.74.4v-1.463h6.546v1.461h-6.547zm-1.885-7.916h-.001v2.22h-.597v-2.302a.979.979 0 0 1 .976-.976h10.494a.978.978 0 0 1 .975.976v3.195h-.597v-3.113zm8.32 9.396a.201.201 0 0 1 .202.202c0 .11-.09.2-.201.202h-5.389a.202.202 0 0 1 0-.404c1.077 0 1.212-1.078 1.212-1.078h2.962s.136 1.078 1.212 1.078zm-8.939-.055a.325.325 0 1 1 0-.65.325.325 0 0 1 0 .65zm1.358-6.762a.788.788 0 0 1 .785.786v5.65a.788.788 0 0 1 -.785.785h-2.715a.788.788 0 0 1 -.786-.785v-5.651a.788.788 0 0 1 .786-.785zm-3.021 5.662h3.325v-4.81h-3.325zm15.297 1.233a.325.325 0 1 1 0-.65.325.325 0 0 1 0 .65zm-3.604-.977v-4.247h7.21v4.247zm7.042-5.022h-6.875a.787.787 0 0 0 -.785.784v4.756c0 .432.353.784.785.784h6.876a.786.786 0 0 0 .785-.784v-4.756a.787.787 0 0 0 -.785-.784z" />
                        </svg>
                      </mat-icon>
                    </bwc-icon>
                  </div>
                  <div className="bw-information-section-card__content">
                    <div className="bw-information-section-card__title">
                      <bw-information-title className="ng-star-inserted">
                        <span className="bw-information-section-card__card-title bwc-o-title">
                          <rjf-title className="bw-rjf-title ng-star-inserted">
                            <span>
                              Can you use electronic devices on board?
                            </span>
                          </rjf-title>
                        </span>
                      </bw-information-title>
                    </div>
                    <bw-information-section-template className="bw-information-section">
                      <div>
                        <div className="bw-information-section__content-container">
                          <rjf-paragraph className="bw-rjf-paragraph ng-star-inserted">
                            <p className="bwc-o-body">
                              Cellphones, tablets, laptops…Our daily companions
                              (for the most part) are welcome on board, under
                              certain conditions.
                            </p>
                          </rjf-paragraph>
                        </div>
                      </div>
                    </bw-information-section-template>
                  </div>
                </mat-card-content>
                <mat-card-actions
                  align="end"
                  className="mat-card-actions mat-card-actions-align-end ng-star-inserted"
                >
                  <span className="bw-information-section-card__action-link">
                    FIND OUT MORE
                  </span>
                </mat-card-actions>
              </mat-card>
            </a>
          </bw-information-card-template>
        </div>{" "}
      </bw-information-card-wrapper>
      <bw-information-highlight-template className="bw-information-section bw-information-highlight-template__full-width ng-star-inserted">
        <bwc-highlight-block className="bw-information-highlight-template__block bwc-highlight-block">
          <section>
            <bw-information-section-template className="bw-information-section bw-information-section--full-width">
              <div>
                <div className="bw-information-section__content-container">
                  <rjf-heading className="bw-rjf-heading ng-star-inserted">
                    <h2
                      className="bwc-o-display-1 ng-star-inserted"
                      id="paragraph1"
                    >
                      <rjf-title className="bw-rjf-title">
                        <span>
                          And don’t forget: at the airport, if you see
                          something, say something.
                        </span>
                      </rjf-title>
                    </h2>{" "}
                  </rjf-heading>
                  <rjf-information-list className="bw-rjf-information-list ng-star-inserted">
                    <ul className="ng-star-inserted">
                      <rjf-recursive-list className="ng-star-inserted">
                        <li>Don’t leave your baggage unattended</li>
                      </rjf-recursive-list>
                      <rjf-recursive-list className="ng-star-inserted">
                        <li>Don’t give your baggage to someone else</li>
                      </rjf-recursive-list>
                      <rjf-recursive-list className="ng-star-inserted">
                        <li>Don’t accept someone else’s baggage</li>
                      </rjf-recursive-list>
                    </ul>{" "}
                  </rjf-information-list>
                  <rjf-paragraph className="bw-rjf-paragraph ng-star-inserted">
                    <p className="bwc-o-body">
                      You may incur fines and be barred from flying. The Air
                      France remains at your disposal should you have any
                      questions.
                    </p>
                  </rjf-paragraph>
                </div>
              </div>
            </bw-information-section-template>
          </section>
        </bwc-highlight-block>
      </bw-information-highlight-template>
      <bw-information-nba className="ng-star-inserted">
        <div className="bw-information-nba-template">
          <bwc-next-best-action>
            <a
              className="bwc-next-best-action bwc-next-best-action--link bwc-next-best-action--variant ng-star-inserted"
              aria-label
              href="/en/information/bagages"
              target="_self"
            >
              <span className="bwc-next-best-action__wrapper ng-star-inserted">
                <bwc-icon
                  aria-hidden="true"
                  className="bwc-next-best-action__icon bwc-icon--baggage ng-star-inserted"
                >
                  <mat-icon
                    role="img"
                    className="mat-icon notranslate mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="baggage-af"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 15"
                      fit
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.963 1.72a.79.79 0 0 1 .79-.79h2.589a.79.79 0 0 1 .789.79v1.04H5.963V1.72zm5.071 1.041V1.72c0-.933-.759-1.693-1.692-1.693h-2.59A1.694 1.694 0 0 0 5.06 1.72v1.042H2.02A1.954 1.954 0 0 0 .093 4.71l-.052 8.343A1.954 1.954 0 0 0 1.99 15H14a1.953 1.953 0 0 0 1.948-1.948L16 4.709a1.954 1.954 0 0 0-1.925-1.948h-3.04z"
                      />
                    </svg>
                  </mat-icon>
                </bwc-icon>
                <span className="bwc-next-best-action__title-wrapper">
                  <span className="bwc-o-title bwc-next-best-action__title smoke-next-best-action-title">
                    <bwc-next-best-action-title className="ng-star-inserted">
                      <rjf-title className="bw-rjf-title ng-star-inserted">
                        <span>Find all there is to know about baggage</span>
                      </rjf-title>
                    </bwc-next-best-action-title>
                  </span>
                </span>
              </span>
              <bwc-icon className="bwc-next-best-action__action--icon bwc-icon--chevron-right ng-star-inserted">
                <mat-icon
                  role="img"
                  className="mat-icon notranslate mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="svg"
                  data-mat-icon-name="chevron-af"
                >
                  <svg
                    height="100%"
                    viewBox="0 0 16 10"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    fit
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                      fillRule="evenodd"
                    />
                  </svg>
                </mat-icon>
              </bwc-icon>
            </a>
          </bwc-next-best-action>
        </div>
      </bw-information-nba>
    </bw-information-area-template>
  );
}

function InformationText() {
  return (
    <bw-information-highlight-template className="bw-information-section bw-information-highlight-template__full-width ng-star-inserted">
      <bwc-highlight-block className="bw-information-highlight-template__block bwc-highlight-block bwc-highlight-block--yellow">
        <section>
          <bw-information-section-template className="bw-information-section bw-information-section--full-width">
            <div>
              <div className="bw-information-section__content-container">
                <rjf-paragraph className="bw-rjf-paragraph ng-star-inserted">
                  <p className="bwc-o-body">
                    <span className="bwc-o-body-variant">
                      Important: soft plastic bags and bags wrapped in
                      rudimentary materials (e.g., household stretch film) are
                      not accepted.
                    </span>
                    This type of packaging damages airport facilities and
                    disrupts the flow of baggage.
                  </p>
                </rjf-paragraph>
              </div>
            </div>
          </bw-information-section-template>
        </section>
      </bwc-highlight-block>
    </bw-information-highlight-template>
  );
}

function RichText({data}) {
  console.log(data)
  return (
    <bw-information-section-template className="bw-information-section bw-information-section--full-width ng-star-inserted">
      <div>
        <div className="bw-information-section__content-container">
          <rjf-heading className="bw-rjf-heading ng-star-inserted">
            <p className="bwc-o-subheading ng-star-inserted">
              <rjf-title className="bw-rjf-title">
                <span>
                  Travel ready. Get the answers to your baggage questions right
                  here.
                </span>
              </rjf-title>
            </p>
          </rjf-heading>
        </div>
      </div>
    </bw-information-section-template>
  );
}

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://eu-api.contentstack.com/v3/content_types/page/entries/blt45d37db616e40915?environment=preview${
          Stack.live_preview.hash
            ? `&live_preview=${Stack.live_preview.hash}`
            : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "bltd3861878402cf423",
            authorization: "cs62e2aabc386de48093ef2619",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // addEditableTags(data, "page", true);
          setData(data);
          setLoading(false);
        });
    };
    Fetchdata();
    onEntryChange(() => {
      Fetchdata();
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data.entry) {
    return <div className="App">Loading...</div>;
  }



  return (
    <div>
      <link rel="stylesheet" href="/globas.css" />
      <bw-app ng-version="12.2.16" className="bw-ubc-information">
        <bwc-page-template cdkmonitorsubtreefocus>
          <mat-sidenav-container className="mat-drawer-container mat-sidenav-container bwc-page-template__container">
            <div className="mat-drawer-backdrop ng-star-inserted" />
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />

            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            />
            <mat-sidenav-content
              cdkscrollable
              className="mat-drawer-content mat-sidenav-content ng-star-inserted"
            >
              <div className="bwc-page-template__content">
                <bwc-print-header>
                  <mat-toolbar className="mat-toolbar mat-toolbar-single-row">
                    <bwc-logo
                      className="bwc-print-brand-logo"
                      _nghost-server-app-c46
                    >
                      <img
                        _ngcontent-server-app-c46
                        className="bwc-logo bwc-logo--brand-logo"
                        src="https://www.static-af.com/assets/components/28.4.0/af/logo/brand-logo.svg"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </bwc-logo>
                  </mat-toolbar>
                </bwc-print-header>

                <main
                  role="main"
                  className="bwc-page-template__content__main-view"
                >
                  <bwc-sticky-spacer
                    tabIndex={-1}
                    _nghost-server-app-c133
                    style={{ height: "104px" }}
                  />
                  <div main-view>
                    <router-outlet />
                    <bw-information className="ng-star-inserted">
                      <div className="bwc-page-layout__large">
                        {/*
                Url : wwws.airfrance.fr/en/information/bagages/recommandations-pour-vos-bagages
                Page Resource : information/bagages/recommandations-pour-vos-bagages
                Tridion component TCM id : blueweb:pr:sales:all:information:ubc_isccm:bagagesrecommandations-pour-vos-bagages:af:en-us:r1
                Last published on : 2022/12/02 08:26:47
              */}

                        <router-outlet>
                          <div className="bwc-page-layout__medium">
                            <bwc-breadcrumb className="bw-information-breadcrumbs bwc-breadcrumb ng-star-inserted">
                              <nav aria-label="Breadcrumbs">
                                <ul>
                                  <li className="bwc-breadcrumb__item bwc-o-body ng-star-inserted">
                                    <a
                                      className="bwc-breadcrumb__item__link ng-star-inserted"
                                      href="/en/information"
                                    >
                                      Information
                                    </a>
                                    <span className="bwc-breadcrumb__item__separator ng-star-inserted">
                                      <bwc-icon
                                        name="chevron-right"
                                        className="bwc-icon--chevron-right"
                                        style={{ fontSize: "0.667rem" }}
                                      >
                                        <mat-icon
                                          role="img"
                                          className="mat-icon notranslate mat-icon-no-color"
                                          aria-hidden="true"
                                          data-mat-icon-type="svg"
                                          data-mat-icon-name="chevron-af"
                                        >
                                          <svg
                                            height="100%"
                                            viewBox="0 0 16 10"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fit
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                          >
                                            <path
                                              d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                              fillRule="evenodd"
                                            />
                                          </svg>
                                        </mat-icon>
                                      </bwc-icon>
                                    </span>
                                  </li>
                                  <li className="bwc-breadcrumb__item bwc-o-body ng-star-inserted">
                                    <a
                                      className="bwc-breadcrumb__item__link ng-star-inserted"
                                      href="/en/information/bagages"
                                    >
                                      Baggage
                                    </a>
                                    <span className="bwc-breadcrumb__item__separator ng-star-inserted">
                                      <bwc-icon
                                        name="chevron-right"
                                        className="bwc-icon--chevron-right"
                                        style={{ fontSize: "0.667rem" }}
                                      >
                                        <mat-icon
                                          role="img"
                                          className="mat-icon notranslate mat-icon-no-color"
                                          aria-hidden="true"
                                          data-mat-icon-type="svg"
                                          data-mat-icon-name="chevron-af"
                                        >
                                          <svg
                                            height="100%"
                                            viewBox="0 0 16 10"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fit
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                          >
                                            <path
                                              d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                              fillRule="evenodd"
                                            />
                                          </svg>
                                        </mat-icon>
                                      </bwc-icon>
                                    </span>
                                  </li>
                                  <li className="bwc-breadcrumb__item bwc-o-body ng-star-inserted">
                                    <span className="ng-star-inserted">
                                      Recommendations for your baggage{" "}
                                    </span>
                                    <span className="bwc-breadcrumb__item__separator ng-star-inserted">
                                      <bwc-icon
                                        name="chevron-right"
                                        className="bwc-icon--chevron-right"
                                        style={{ fontSize: "0.667rem" }}
                                      >
                                        <mat-icon
                                          role="img"
                                          className="mat-icon notranslate mat-icon-no-color"
                                          aria-hidden="true"
                                          data-mat-icon-type="svg"
                                          data-mat-icon-name="chevron-af"
                                        >
                                          <svg
                                            height="100%"
                                            viewBox="0 0 16 10"
                                            width="100%"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fit
                                            preserveAspectRatio="xMidYMid meet"
                                            focusable="false"
                                          >
                                            <path
                                              d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                              fillRule="evenodd"
                                            />
                                          </svg>
                                        </mat-icon>
                                      </bwc-icon>
                                    </span>
                                  </li>
                                </ul>
                              </nav>
                            </bwc-breadcrumb>
                            <bw-information-column-template className="bw-information-column-template ng-star-inserted">
                              <bw-information-area-template className="bw-information-area-block bw-information-area-template ng-star-inserted">
                                <bw-information-section-template className="bw-information-section bw-information-section--full-width ng-star-inserted">
                                  <div>
                                    <div className="bw-information-section__content-container">
                                      <rjf-heading className="bw-rjf-heading ng-star-inserted">
                                        <h1 className="bwc-o-display-2 ng-star-inserted">
                                          <rjf-title className="bw-rjf-title">
                                            <span>{data.entry.title}</span>
                                          </rjf-title>
                                        </h1>
                                      </rjf-heading>
                                    </div>
                                  </div>
                                </bw-information-section-template>

                                {data.entry.modular_blocks.map((i) => {
                                  if (i.hasOwnProperty("rich_text")) {
                                    return <RichText key={i.title} data={i} />;
                                  }
                                  if (i.hasOwnProperty("information_text")) {
                                    return <InformationText key={i.title} />;
                                  }
                                  if (i.hasOwnProperty("information_card")) {
                                    return <InformationCard key={i.title} />;
                                  }
                                })}
                              </bw-information-area-template>

                              <div
                                ub-in-page="5fc8f2d66b5ec1521c60e1b0"
                                className="usabilla-pagewidget"
                                id="usabilla-pagewidget"
                              >
                                <iframe
                                  width="100%"
                                  height={140}
                                  frameBorder={0}
                                  marginWidth={0}
                                  marginHeight={0}
                                  scrolling="no"
                                  src="//d6tizftlrpuof.cloudfront.net/live/i/5695665d87df31eb51fbf7fd/6f0da8e3faa8d31d32252801685e54c2b91560af.html"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    border: "0px",
                                    overflow: "hidden",
                                    backgroundColor: "transparent",
                                  }}
                                />
                              </div>
                            </bw-information-column-template>
                            <bw-information-read-more className="bw-information-column-template" />
                          </div>
                        </router-outlet>
                      </div>
                    </bw-information>
                  </div>
                </main>
                <footer role="contentinfo">
                  <bwc-footer className="ng-star-inserted">
                    <nav className="bwc-footer">
                      <div className="bwc-footer__top-row ng-star-inserted">
                        <span className="bwc-footer__social">
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="http://www.facebook.com/pages/Air-France/10150136746870526?ref=ts"
                            target="_blank"
                            aria-label="facebook"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--facebook-round"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="facebook-round-af"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10.214 4.791h-.905c-.709 0-.846.338-.846.832v1.09h1.691l-.22 1.709h-1.47v4.382H6.697V8.422H5.225V6.714h1.473v-1.26c0-1.462.894-2.258 2.198-2.258.624 0 1.162.047 1.318.068v1.527zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"
                                    />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="https://twitter.com/AirFrance"
                            target="_blank"
                            aria-label="twitter"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--twitter-round"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="twitter-round-af"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12.277 6.076c.004.083.005.166.005.25 0 2.558-1.946 5.506-5.505 5.506-1.093 0-2.11-.32-2.967-.87a3.887 3.887 0 0 0 2.865-.8 1.938 1.938 0 0 1-1.808-1.344 1.95 1.95 0 0 0 .874-.033A1.936 1.936 0 0 1 4.19 6.887v-.025c.26.146.559.232.876.243a1.933 1.933 0 0 1-.6-2.583 5.498 5.498 0 0 0 3.99 2.021 1.935 1.935 0 0 1 3.297-1.765c.44-.087.855-.248 1.229-.47a1.938 1.938 0 0 1-.852 1.071 3.867 3.867 0 0 0 1.112-.305c-.259.388-.587.73-.965 1.002M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0"
                                    />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="http://www.linkedin.com/company/air-france"
                            target="_blank"
                            aria-label="linkedin"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--linkedin-round"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="linkedin-round-af"
                                >
                                  <svg
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    width="100%"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path d="m4.15 11.77h1.811v-5.447h-1.81v5.447zm3.85 4.23a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-2.944-10.421c.631 0 1.024-.418 1.024-.941-.011-.534-.393-.941-1.013-.941-.619 0-1.024.406-1.024.94 0 .524.393.942 1.002.942h.01zm7.434 6.191v-3.123c0-1.674-.893-2.453-2.085-2.453-.96 0-1.391.53-1.631.9v-.772h-1.811c.024.512 0 5.448 0 5.448h1.811v-3.043c0-.162.012-.325.06-.44.13-.326.428-.663.928-.663.655 0 .918.5.918 1.231v2.915z" />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="http://instagram.com/airfrance"
                            target="_blank"
                            aria-label="instagram"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--instagram"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="instagram-af"
                                >
                                  <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 23 23"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M22.328 11.357a10.953 10.953 0 0 1-1.87 6.11 11.04 11.04 0 0 1-4.97 4.043 11.106 11.106 0 0 1-6.39.615 11.07 11.07 0 0 1-5.655-3.023 10.977 10.977 0 0 1-3.013-5.64 10.94 10.94 0 0 1 .648-6.353 11.008 11.008 0 0 1 4.088-4.925 11.094 11.094 0 0 1 6.15-1.832c1.45.001 2.886.287 4.225.841a11.026 11.026 0 0 1 3.577 2.388 10.96 10.96 0 0 1 2.384 3.57c.551 1.334.832 2.764.826 4.206ZM11.425 4.721h-.044c-.305 0-.607-.003-.908-.006a31.732 31.732 0 0 0-2.212.026c-2.016.115-3.448 1.5-3.52 3.495a84.463 84.463 0 0 0 0 6.237c.08 2.045 1.549 3.488 3.605 3.562 1.987.073 3.98.074 5.972 0 2.227-.085 3.636-1.491 3.714-3.706.07-2.017.073-4.041-.015-6.056-.092-2.1-1.554-3.458-3.668-3.544a37.941 37.941 0 0 0-2.015-.014c-.303.003-.606.006-.91.006Zm5.282 7.53c.009.654.017 1.309-.016 1.961-.078 1.589-.867 2.443-2.465 2.505a75.352 75.352 0 0 1-5.9 0c-1.535-.056-2.375-.881-2.437-2.406a78.95 78.95 0 0 1 0-5.934c.058-1.496.903-2.334 2.45-2.4 1.944-.08 3.9-.08 5.84 0 1.635.066 2.449.97 2.516 2.61.018.657.014 1.311.01 1.967-.001.274-.003.547-.003.821l-.002-.008c0 .294.004.589.007.884Zm-5.453 2.554a3.466 3.466 0 0 0 2.47-.99 3.43 3.43 0 0 0 1.024-2.443 3.434 3.434 0 0 0-.998-2.448 3.471 3.471 0 0 0-2.447-1.029 3.486 3.486 0 0 0-2.46.993 3.45 3.45 0 0 0-1.035 2.434 3.415 3.415 0 0 0 .99 2.46 3.451 3.451 0 0 0 2.456 1.024Zm4.42-7.012a.803.803 0 0 0-.494-.753.815.815 0 0 0-1.07 1.067.817.817 0 0 0 .76.505.814.814 0 0 0 .804-.82ZM12.126 9.33a2.212 2.212 0 0 0-.841-.175 2.239 2.239 0 0 0-1.567.646c-.416.411-.653.97-.659 1.554-.002 1.142 1.02 2.164 2.184 2.182a2.213 2.213 0 0 0 1.564-.627 2.19 2.19 0 0 0 .66-1.543 2.182 2.182 0 0 0-.631-1.555 2.203 2.203 0 0 0-.71-.482Z"
                                    />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="https://www.messenger.com/t/airfrance"
                            target="_blank"
                            aria-label="messenger"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--messenger"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="messenger-af"
                                >
                                  <svg
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    width="100%"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path d="m8 0c-4.419 0-8 3.316-8 7.407 0 2.332 1.164 4.411 2.981 5.769v2.824l2.724-1.495c.727.202 1.497.31 2.295.31 4.419 0 8-3.316 8-7.407 0-4.09-3.582-7.408-8-7.408zm.795 9.975-2.038-2.173-3.975 2.173 4.373-4.642 2.087 2.173 3.925-2.173z" />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="https://www.youtube.com/airfranceonair"
                            target="_blank"
                            aria-label="youtube"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--youtube-round"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="youtube-round-af"
                                >
                                  <svg
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    width="100%"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path d="m8 16a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm4.514-9.823s-.085-.601-.347-.866c-.331-.347-.703-.35-.873-.37-1.221-.088-3.052-.088-3.052-.088h-.004s-1.83 0-3.052.089c-.17.02-.542.022-.873.369-.262.265-.347.866-.347.866s-.087.706-.087 1.412v.661c0 .706.087 1.412.087 1.412s.085.601.347.866c.331.347.767.336.962.373.697.067 2.965.087 2.965.087s1.833-.002 3.054-.09c.17-.02.542-.023.873-.37.262-.265.347-.866.347-.866s.088-.706.088-1.412v-.66c0-.706-.088-1.412-.088-1.412zm-5.174 2.875v-2.45l2.356 1.23z" />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                          <a
                            mat-icon-button
                            className="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"
                            href="https://wa.me/33699385720"
                            target="_blank"
                            aria-label="whatsapp"
                            rel="noopener noreferrer"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="mat-button-wrapper">
                              <bwc-icon
                                cropped="true"
                                className="bwc-icon--whatsapp-round"
                              >
                                <mat-icon
                                  role="img"
                                  className="mat-icon notranslate mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="svg"
                                  data-mat-icon-name="whatsapp-round-af"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 16 16"
                                    fit
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <path
                                      d="M8.02 0a8 8 0 0 1 8 8c0 4.419-3.58 8-8 8a8 8 0 0 1-8-8c0-4.419 3.58-8 8-8zm.017 3.761a4.208 4.208 0 0 0-4.202 4.201c0 .74.193 1.463.56 2.1L3.8 12.239l2.228-.584a4.218 4.218 0 0 0 2.008.512 4.208 4.208 0 0 0 4.204-4.202 4.175 4.175 0 0 0-1.23-2.972 4.174 4.174 0 0 0-2.973-1.232zM6.348 5.66c.226 0 .236.002.291.063.032.035.155.296.274.581.293.703.278.646.207.79a2.078 2.078 0 0 1-.22.307c-.21.243-.21.256-.003.564.287.427.596.738.998 1.003.252.166.685.373.78.373.086 0 .206-.122.51-.523.097-.128.118-.144.19-.144.115 0 1.177.497 1.25.586.042.05.018.32-.046.531-.044.14-.069.179-.204.31-.17.166-.403.301-.612.356-.19.05-.576.044-.782-.01a5.625 5.625 0 0 1-1.26-.515c-.954-.561-2.057-1.878-2.248-2.684a1.536 1.536 0 0 1 .117-1.062c.09-.168.348-.453.45-.495.046-.02.164-.031.308-.031z"
                                      fill="#051039"
                                      fillRule="nonzero"
                                    />
                                  </svg>
                                </mat-icon>
                              </bwc-icon>
                            </span>
                            <span
                              matripple
                              className="mat-ripple mat-button-ripple mat-button-ripple-round"
                            />
                            <span className="mat-button-focus-overlay" />
                          </a>
                        </span>
                      </div>
                      <div className="bwc-footer__main-row">
                        <div className="bwc-footer__content">
                          <bwc-footer-nav-list className="ng-tns-c110-2 ng-star-inserted">
                            <div className="bwc-footer-nav-list ng-tns-c110-2">
                              <div className="bwc-footer-nav-list__title ng-tns-c110-2">
                                <h3 className="bwc-o-title ng-tns-c110-2">
                                  Help and Contacts
                                </h3>
                                <button
                                  type="button"
                                  className="bwc-footer-nav-list__expand-button ng-tns-c110-2"
                                >
                                  <span className="bwc-o-title ng-tns-c110-2">
                                    Help and Contacts
                                  </span>
                                  <bwc-icon
                                    name="chevron-down"
                                    className="ng-tns-c110-2 bwc-icon--chevron-down"
                                  >
                                    <mat-icon
                                      role="img"
                                      className="mat-icon notranslate mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="svg"
                                      data-mat-icon-name="chevron-af"
                                    >
                                      <svg
                                        height="100%"
                                        viewBox="0 0 16 10"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fit
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                      >
                                        <path
                                          d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </mat-icon>
                                  </bwc-icon>
                                </button>
                              </div>
                              <div
                                className="bwc-footer-nav-list__content ng-tns-c110-2 ng-trigger ng-trigger-bwcFooterNavListExpand"
                                style={{ height: "0px" }}
                              >
                                <bwc-multi-list className="bwc-o-subheading ng-tns-c110-2">
                                  <mat-nav-list className="mat-nav-list mat-list-base bwc-multi-list">
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/contact"
                                            target="_self"
                                            aria-label="Contact us"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Contact us
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/information/legal/remboursement"
                                            target="_self"
                                            aria-label="Refund"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Refund
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/information/legal/reclamation"
                                            target="_self"
                                            aria-label="Claims"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Claims
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/trip"
                                            target="_self"
                                            aria-label="Request a receipt"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Request a receipt
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/contact/booking/information_assistance"
                                            target="_self"
                                            aria-label="Passengers with disabilities"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Passengers with disabilities
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                  </mat-nav-list>
                                </bwc-multi-list>
                              </div>
                            </div>
                          </bwc-footer-nav-list>
                          <bwc-footer-nav-list className="ng-tns-c110-3 ng-star-inserted">
                            <div className="bwc-footer-nav-list ng-tns-c110-3">
                              <div className="bwc-footer-nav-list__title ng-tns-c110-3">
                                <h3 className="bwc-o-title ng-tns-c110-3">
                                  Online payment and shopping
                                </h3>
                                <button
                                  type="button"
                                  className="bwc-footer-nav-list__expand-button ng-tns-c110-3"
                                >
                                  <span className="bwc-o-title ng-tns-c110-3">
                                    Online payment and shopping
                                  </span>
                                  <bwc-icon
                                    name="chevron-down"
                                    className="ng-tns-c110-3 bwc-icon--chevron-down"
                                  >
                                    <mat-icon
                                      role="img"
                                      className="mat-icon notranslate mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="svg"
                                      data-mat-icon-name="chevron-af"
                                    >
                                      <svg
                                        height="100%"
                                        viewBox="0 0 16 10"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fit
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                      >
                                        <path
                                          d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </mat-icon>
                                  </bwc-icon>
                                </button>
                              </div>
                              <div
                                className="bwc-footer-nav-list__content ng-tns-c110-3 ng-trigger ng-trigger-bwcFooterNavListExpand"
                                style={{ height: "0px" }}
                              >
                                <bwc-multi-list className="bwc-o-subheading ng-tns-c110-3">
                                  <mat-nav-list className="mat-nav-list mat-list-base bwc-multi-list">
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/information/legal/modalites-et-frais"
                                            target="_self"
                                            aria-label="Booking fees and conditions"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Booking fees and conditions
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="https://shopping.airfrance.com/?"
                                            target="_self"
                                            aria-label="Air France shopping"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Air France shopping
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/information/flyingblue/cartes-amex"
                                            target="_self"
                                            aria-label="AIR FRANCE KLM – AMERICAN EXPRESS cards"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              AIR FRANCE KLM – AMERICAN EXPRESS
                                              cards
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                  </mat-nav-list>
                                </bwc-multi-list>
                              </div>
                            </div>
                          </bwc-footer-nav-list>
                          <bwc-footer-nav-list className="ng-tns-c110-4 ng-star-inserted">
                            <div className="bwc-footer-nav-list ng-tns-c110-4">
                              <div className="bwc-footer-nav-list__title ng-tns-c110-4">
                                <h3 className="bwc-o-title ng-tns-c110-4">
                                  About Air France and partners
                                </h3>
                                <button
                                  type="button"
                                  className="bwc-footer-nav-list__expand-button ng-tns-c110-4"
                                >
                                  <span className="bwc-o-title ng-tns-c110-4">
                                    About Air France and partners
                                  </span>
                                  <bwc-icon
                                    name="chevron-down"
                                    className="ng-tns-c110-4 bwc-icon--chevron-down"
                                  >
                                    <mat-icon
                                      role="img"
                                      className="mat-icon notranslate mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="svg"
                                      data-mat-icon-name="chevron-af"
                                    >
                                      <svg
                                        height="100%"
                                        viewBox="0 0 16 10"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fit
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                      >
                                        <path
                                          d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </mat-icon>
                                  </bwc-icon>
                                </button>
                              </div>
                              <div
                                className="bwc-footer-nav-list__content ng-tns-c110-4 ng-trigger ng-trigger-bwcFooterNavListExpand"
                                style={{ height: "0px" }}
                              >
                                <bwc-multi-list className="bwc-o-subheading ng-tns-c110-4">
                                  <mat-nav-list className="mat-nav-list mat-list-base bwc-multi-list">
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="https://www.flyingblue.com/index.html"
                                            target="_self"
                                            aria-label="Flying Blue"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Flying Blue
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="https://www.transavia.com/"
                                            target="_self"
                                            aria-label="Transavia"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Transavia
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="http://www.klm.com/"
                                            target="_self"
                                            aria-label="KLM"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              KLM
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="http://www.skyteam.com/"
                                            target="_self"
                                            aria-label="SkyTeam"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              SkyTeam
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="http://corporate.airfrance.com/"
                                            target="_self"
                                            aria-label="Air France corporate"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Air France corporate
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="http://www.airfrance.com/?"
                                            target="_self"
                                            aria-label="Worldwide sites"
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Worldwide sites
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                    <bwc-multi-list-item
                                      className="bwc-multi-list-item ng-star-inserted"
                                      style={{}}
                                    >
                                      <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                                        <div className="mat-list-item-content">
                                          <div
                                            mat-ripple
                                            className="mat-ripple mat-list-item-ripple"
                                          />
                                          <div className="mat-list-text" />
                                          <a
                                            className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                                            href="/en/travel-guide/destinations"
                                            target="_self"
                                            aria-label
                                          >
                                            <span className="bwc-multi-list-item--link-label">
                                              Travel destinations
                                            </span>
                                          </a>
                                        </div>
                                      </mat-list-item>
                                    </bwc-multi-list-item>
                                  </mat-nav-list>
                                </bwc-multi-list>
                              </div>
                            </div>
                          </bwc-footer-nav-list>
                          <bwc-footer-nav-list className="ng-tns-c110-5 ng-star-inserted">
                            <div className="bwc-footer-nav-list ng-tns-c110-5">
                              <div className="bwc-footer-nav-list__title ng-tns-c110-5">
                                <h3 className="bwc-o-title ng-tns-c110-5">
                                  Air France app
                                </h3>
                                <button
                                  type="button"
                                  className="bwc-footer-nav-list__expand-button ng-tns-c110-5"
                                >
                                  <span className="bwc-o-title ng-tns-c110-5">
                                    Air France app
                                  </span>
                                  <bwc-icon
                                    name="chevron-down"
                                    className="ng-tns-c110-5 bwc-icon--chevron-down"
                                  >
                                    <mat-icon
                                      role="img"
                                      className="mat-icon notranslate mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="svg"
                                      data-mat-icon-name="chevron-af"
                                    >
                                      <svg
                                        height="100%"
                                        viewBox="0 0 16 10"
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fit
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                      >
                                        <path
                                          d="m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </mat-icon>
                                  </bwc-icon>
                                </button>
                              </div>
                              <div
                                className="bwc-footer-nav-list__content ng-tns-c110-5 ng-trigger ng-trigger-bwcFooterNavListExpand"
                                style={{ height: "0px" }}
                              >
                                <a
                                  className="bwc-footer-nav-list__app-badge ng-star-inserted"
                                  href="https://app.adjust.com/414rc7r"
                                  target="_self"
                                  aria-label="Download the Air France application on your iPhone"
                                  style={{}}
                                >
                                  <img
                                    alt=""
                                    src="https://img.static-af.com/images/media/9D55C68A-D87B-4B21-B7F43E7B76A99E9A/"
                                  />
                                </a>
                                <a
                                  className="bwc-footer-nav-list__app-badge ng-star-inserted"
                                  href="https://app.adjust.com/414rc7r"
                                  target="_self"
                                  aria-label="Download the Air France application on your Android"
                                  style={{}}
                                >
                                  <img
                                    alt=""
                                    src="https://img.static-af.com/images/media/718E33D6-4636-411F-839A07629E5B96F4/"
                                  />
                                </a>
                              </div>
                            </div>
                          </bwc-footer-nav-list>
                        </div>
                      </div>
                    </nav>
                  </bwc-footer>
                  <bwc-legal-footer className="bwc-o-subheading ng-star-inserted">
                    <div className="bwc-legal-footer ng-star-inserted">
                      <ul className="bwc-legal-footer__list">
                        <li className="bwc-legal-footer__item ng-star-inserted">
                          <a
                            className="bwc-legal-footer__link ng-star-inserted"
                            href="https://www.airfrance.fr/FR/en/local/transverse/footer/plan-du-site.htm"
                            target="_self"
                          >
                            Site Map
                          </a>
                        </li>
                        <li className="bwc-legal-footer__item ng-star-inserted">
                          <a
                            className="bwc-legal-footer__link ng-star-inserted"
                            href="/en/information/legal"
                            target="_self"
                          >
                            Legal notices
                          </a>
                        </li>
                        <li className="bwc-legal-footer__item ng-star-inserted">
                          <a
                            className="bwc-legal-footer__link ng-star-inserted"
                            href="/en/information/legal/politique-confidentialite"
                            target="_self"
                          >
                            Privacy policy
                          </a>
                        </li>
                        <li className="bwc-legal-footer__item ng-star-inserted">
                          <a
                            className="bwc-legal-footer__link ng-star-inserted"
                            href="/en/information/legal/accessibilite"
                            target="_self"
                          >
                            Accessibility statement
                          </a>
                        </li>
                        <li className="bwc-legal-footer__item ng-star-inserted">
                          <button className="bwc-legal-footer__link ng-star-inserted">
                            Cookie settings
                          </button>
                        </li>
                      </ul>
                    </div>
                  </bwc-legal-footer>
                </footer>
                <bwc-sticky-spacer
                  _nghost-server-app-c133
                  style={{ height: "0px" }}
                />
                <bwc-sticky-header className="bwc-page-template__content__sticky-top-tasks ng-star-inserted">
                  <div
                    style={{
                      position: "absolute",
                      left: "-10px",
                      top: "-10px",
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      zIndex: -1,
                      visibility: "hidden",
                    }}
                    className="ng-star-inserted"
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        transition: "all 0s ease 0s",
                        width: "100000px",
                        height: "100000px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "-10px",
                      top: "-10px",
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      zIndex: -1,
                      visibility: "hidden",
                    }}
                    className="ng-star-inserted"
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transition: "0s",
                        width: "200%",
                        height: "200%",
                      }}
                    />
                  </div>
                </bwc-sticky-header>
              </div>
            </mat-sidenav-content>
          </mat-sidenav-container>
        </bwc-page-template>
      </bw-app>
    </div>
  );
}
