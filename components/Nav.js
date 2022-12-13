export default function Nav () {
    return (
        <bwc-sticky-header
  className="bwc-page-template__content__sticky-header"
  style={{ position: "fixed" }}
>
  <div
    style={{
      position: "absolute",
      left: "-10px",
      top: "-10px",
      right: 0,
      bottom: 0,
      overflow: "hidden",
      zIndex: -1,
      visibility: "hidden"
    }}
    className="ng-star-inserted"
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transition: "all 0s ease 0s",
        width: 100000,
        height: 100000
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
      visibility: "hidden"
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
        height: "200%"
      }}
    />
  </div>
  {/**/}
  {/**/}
  <header>
    <bwc-logo-header className="ng-star-inserted">
      <bwc-skiplink className="bwc-skiplink ng-star-inserted">
        <button
          mat-raised-button=""
          color="primary"
          type="button"
          className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
        >
          <span className="mat-button-wrapper"> Skip to main content</span>
          <span matripple="" className="mat-ripple mat-button-ripple" />
          <span className="mat-button-focus-overlay" />
        </button>
      </bwc-skiplink>
      {/**/}
      <div className="bwc-page-layout__large">
        <mat-toolbar className="mat-toolbar bwc-logo-header mat-toolbar-single-row">
          <div className="bwc-logo-header__button-container bwc-logo-header__button-container--menu">
            <button
              mat-button=""
              mat-icon-button=""
              type="button"
              className="mat-focus-indicator bwc-logo-header__button-menu mat-button mat-icon-button mat-button-base ng-star-inserted"
              aria-label="Open menu"
            >
              <span className="mat-button-wrapper">
                <bwc-icon color="primary" className="bwc-icon--menu">
                  <mat-icon
                    role="img"
                    className="mat-icon notranslate mat-primary"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="menu-af"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 18 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M16.53 2.926H1.469A1.465 1.465 0 0 1 0 1.464C0 .654.657 0 1.469 0h15.06C17.342 0 18 .655 18 1.464c0 .807-.659 1.462-1.47 1.462zm0 6.035H1.469A1.465 1.465 0 0 1 0 7.498c0-.808.657-1.463 1.469-1.463h15.06c.812 0 1.471.655 1.471 1.463s-.659 1.463-1.47 1.463zm0 6.039H1.469a1.467 1.467 0 1 1 0-2.932h15.06c.81 0 1.469.655 1.471 1.466 0 .809-.659 1.466-1.47 1.466z" />
                    </svg>
                  </mat-icon>
                </bwc-icon>
              </span>
              <span
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              />
              <span className="mat-button-focus-overlay" />
            </button>
            {/**/}
            {/**/}
          </div>
          <div className="bwc-logo-header__logo-container">
            {/**/}
            {/**/}
            <a
              className="bwc-logo-header__logo-container-link ng-star-inserted"
              href="/en/home"
            >
              <span
                role="img"
                className="bwc-logo-header__logo"
                aria-label="Official Air France website"
              />
              <span className="bwc-logo-header__logo-text ng-star-inserted">
                Official Air France website
              </span>
              {/**/}
            </a>
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="bwc-logo-header__logo-container-link bwc-logo-header__logo-container-link--skyteam ng-star-inserted"
              href="https://www.skyteam.com"
            >
              <span
                role="img"
                className="bwc-logo-header__logo-skyteam"
                aria-label="Skyteam website"
              />
              <span className="bwc-logo-header__logo-skyteam-text ng-star-inserted">
                Skyteam website
              </span>
              {/**/}
            </a>
            {/**/}
            {/**/}
          </div>
          <div className="bwc-logo-header__spacer" />
          {/**/}
          {/**/}
          <div className="bwc-logo-header__button-container bwc-logo-header__button-container--language">
            <button
              mat-button=""
              mat-icon-button=""
              type="button"
              aria-haspopup="true"
              className="mat-focus-indicator bwc-logo-header__button-countrylang mat-button mat-icon-button mat-button-base ng-star-inserted"
              aria-label="France - English, Select country or region and language"
            >
              <span className="mat-button-wrapper">
                <bwc-icon
                  color="primary"
                  name="language"
                  className="bwc-icon--language"
                >
                  <mat-icon
                    role="img"
                    className="mat-icon notranslate mat-primary"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="language-af"
                  >
                    <svg
                      height="100%"
                      viewBox="0 0 16 16"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="m13.43 3.376a6.813 6.813 0 0 0 -.06-.354l-.205-1.068.716.817a7.947 7.947 0 0 1 1.79 3.524l.09.41-.415-.053a22.11 22.11 0 0 1 -1.646-.272l-.262-.052.026-.266c.097-.972.085-1.875-.033-2.685zm-2.964 7.954a37.265 37.265 0 0 0 -2.486-1.05l-.27-.101 1.427-3.998.274.092c.868.29 1.74.547 2.597.767l.274.07-.059.276a14.273 14.273 0 0 1 -1.372 3.813l-.131.247-.254-.117zm-5.086-6.657a37.33 37.33 0 0 0 2.52 1.062l.272.103-1.428 3.997-.274-.092a37.63 37.63 0 0 0 -2.613-.774l-.272-.07.055-.274c.137-.676.32-1.334.542-1.96.223-.622.496-1.248.812-1.86l.13-.25zm.464-1.293a9.868 9.868 0 0 1 1.446-1.686c.8-.727 1.613-1.16 2.355-1.249l.474-.057-1.602 4.486-.282-.107a36.679 36.679 0 0 1 -2.271-.95l-.319-.148.2-.289zm.27 7.323.286.095-1.604 4.492-.33-.332c-.846-.851-1.232-2.561-1.06-4.691l.029-.35.34.088a37 37 0 0 1 2.34.698zm5.252 2.214c.516.273 1 .551 1.44.828l.355.223-.33.26a8.006 8.006 0 0 1 -3.627 1.598l-1.077.177.84-.696c.725-.6 1.403-1.372 2.016-2.292l.148-.222zm-1.375-.299c-1.203 1.737-2.571 2.814-3.756 2.954l-.473.056 1.602-4.485.281.107c.756.287 1.505.6 2.226.932l.32.147-.2.29zm-.225-7.305-.285-.095 1.598-4.474.331.355c.506.544.854 1.383 1.007 2.426.1.673.116 1.42.05 2.22l-.028.351-.34-.089a36.411 36.411 0 0 1 -2.332-.694zm-5.275-2.221a21.993 21.993 0 0 1 -1.443-.83l-.354-.222.33-.26a7.955 7.955 0 0 1 1.51-.94 7.979 7.979 0 0 1 2.108-.663l1.069-.177-.831.695a8.505 8.505 0 0 0 -.278.243c-.607.551-1.187 1.243-1.728 2.056l-.147.222zm-.281 1.008-.134.258a16.153 16.153 0 0 0 -1.443 4.024l-.061.285-.285-.056a21.932 21.932 0 0 0 -2.022-.318l-.265-.028v-.266c0-.909.155-1.804.46-2.662a7.957 7.957 0 0 1 1.334-2.35l.169-.205.222.146c.51.334 1.104.683 1.766 1.035l.258.137zm-1.824 5.845c-.11 1.1-.075 2.125.105 3.045l.209 1.072-.72-.821a8.003 8.003 0 0 1 -1.79-3.529l-.091-.41.415.053a22.13 22.13 0 0 1 1.637.272l.261.052zm13.21-2.23.264.027v.266a7.94 7.94 0 0 1 -.466 2.662 7.902 7.902 0 0 1 -1.33 2.352l-.168.206-.222-.146a22.335 22.335 0 0 0 -1.768-1.037l-.257-.136.133-.26c.33-.64.618-1.3.855-1.963.234-.655.429-1.349.58-2.062l.06-.285.287.057c.74.148 1.422.255 2.031.319z" />
                    </svg>
                  </mat-icon>
                </bwc-icon>
                <span className="bwc-o-body-variant bwc-logo-header__label-countrylang">
                  France - EN
                </span>
              </span>
              <span
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              />
              <span className="mat-button-focus-overlay" />
            </button>
            {/**/}
            {/**/}
          </div>
          {/**/}
          <div className="ng-star-inserted">
            <button
              mat-button=""
              mat-icon-button=""
              type="button"
              className="mat-focus-indicator bwc-logo-header__login-button mat-button mat-icon-button mat-button-base ng-star-inserted"
              aria-label="Log in"
            >
              <span className="mat-button-wrapper">
                <bwc-icon
                  color="primary"
                  className="bwc-logo-header__profile-icon bwc-icon--profile"
                >
                  <mat-icon
                    role="img"
                    className="mat-icon notranslate mat-primary"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="profile-af"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 14 17"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.997 7.637C4.92 7.634 3.243 5.926 3.243 3.82 3.243 1.716 4.921.002 6.997 0c2.08 0 3.76 1.716 3.76 3.82 0 2.106-1.68 3.814-3.76 3.817zM0 17v-3.52c0-2.642 2.129-4.805 4.73-4.805h4.54c2.601 0 4.73 2.163 4.73 4.805V17H0z"
                      />
                    </svg>
                  </mat-icon>
                </bwc-icon>
                <span className="bwc-o-body-variant bwc-logo-header__label-login">
                  Log in
                </span>
              </span>
              <span
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              />
              <span className="mat-button-focus-overlay" />
            </button>
            {/**/}
            {/**/}
            <mat-menu
              yposition="below"
              className="ng-tns-c105-1 ng-star-inserted"
            >
              {/**/}
            </mat-menu>
          </div>
          {/**/}
          <div className="bwc-logo-header__enrol-container ng-star-inserted">
            <button
              mat-button=""
              mat-icon-button=""
              type="button"
              className="mat-focus-indicator bwc-logo-header__enrol-button mat-button mat-icon-button mat-button-base"
              aria-label="Sign up"
            >
              <span className="mat-button-wrapper">
                <bwc-icon
                  color="primary"
                  name="create-account:af enrollment:kl"
                  className="bwc-icon--create-account"
                >
                  <mat-icon
                    role="img"
                    className="mat-icon notranslate mat-primary"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="create-account-af"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 19"
                      xmlns="http://www.w3.org/2000/svg"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path d="M0 18.517V14.89a4.963 4.963 0 0 1 4.949-4.95h4.748a4.963 4.963 0 0 1 4.949 4.95v3.627H0zM19.281 5.732a.72.72 0 0 1 0 1.438h-2.275l-.04.04v2.275a.72.72 0 0 1-1.438 0V7.21l-.04-.04h-2.275a.72.72 0 0 1 0-1.437h2.275l.039-.04V3.417a.72.72 0 0 1 1.439 0v2.276l.04.039h2.275zM7.32 8.87a3.933 3.933 0 0 1-3.929-3.933A3.937 3.937 0 0 1 7.321 1a3.935 3.935 0 0 1 0 7.87H7.32z" />
                    </svg>
                  </mat-icon>
                </bwc-icon>
                <span className="bwc-o-body-variant bwc-logo-header__label-enrol">
                  Sign up
                </span>
              </span>
              <span
                matripple=""
                className="mat-ripple mat-button-ripple mat-button-ripple-round"
              />
              <span className="mat-button-focus-overlay" />
            </button>
          </div>
          {/**/}
        </mat-toolbar>
      </div>
    </bwc-logo-header>
    {/**/}
    {/**/}
    {/**/}
    <nav className="bwc-page-template__content__sticky-header__toptasks ng-star-inserted">
      <bwc-top-task>
        <bwc-multi-list horizontal="true" className="bwc-page-layout__large">
          <mat-nav-list
            role="navigation"
            className="mat-nav-list mat-list-base bwc-multi-list"
          >
            <bwc-multi-list-item className="bwc-multi-list-item ng-star-inserted">
              <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                <div className="mat-list-item-content">
                  <div
                    mat-ripple=""
                    className="mat-ripple mat-list-item-ripple"
                  />
                  <div className="mat-list-text" />
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                    href="/en"
                    target="_self"
                    aria-label="Book a flight"
                  >
                    {/**/}
                    {/**/}
                    <span className="bwc-multi-list-item--link-label">
                      Book a flight
                    </span>
                  </a>
                  {/**/}
                  {/**/}
                </div>
              </mat-list-item>
              {/**/}
            </bwc-multi-list-item>
            {/**/}
            {/**/}
            <bwc-multi-list-item className="bwc-multi-list-item ng-star-inserted">
              <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                <div className="mat-list-item-content">
                  <div
                    mat-ripple=""
                    className="mat-ripple mat-list-item-ripple"
                  />
                  <div className="mat-list-text" />
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                    href="/en/check-in"
                    target="_self"
                    aria-label="Check-in"
                  >
                    {/**/}
                    {/**/}
                    <span className="bwc-multi-list-item--link-label">
                      Check-in
                    </span>
                  </a>
                  {/**/}
                  {/**/}
                </div>
              </mat-list-item>
              {/**/}
            </bwc-multi-list-item>
            {/**/}
            {/**/}
            <bwc-multi-list-item className="bwc-multi-list-item ng-star-inserted">
              <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                <div className="mat-list-item-content">
                  <div
                    mat-ripple=""
                    className="mat-ripple mat-list-item-ripple"
                  />
                  <div className="mat-list-text" />
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                    href="/en/trip"
                    target="_self"
                    aria-label="My bookings"
                  >
                    {/**/}
                    {/**/}
                    <span className="bwc-multi-list-item--link-label">
                      My bookings
                    </span>
                  </a>
                  {/**/}
                  {/**/}
                </div>
              </mat-list-item>
              {/**/}
            </bwc-multi-list-item>
            {/**/}
            {/**/}
            <bwc-multi-list-item className="bwc-multi-list-item ng-star-inserted">
              <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                <div className="mat-list-item-content">
                  <div
                    mat-ripple=""
                    className="mat-ripple mat-list-item-ripple"
                  />
                  <div className="mat-list-text" />
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    className="bwc-multi-list-item__link bwc-multi-list-item--link bwc-multi-list-item--selected bwc-multi-list-item__link--active ng-star-inserted"
                    href="/en/information"
                    target="_self"
                    aria-label="Information"
                  >
                    {/**/}
                    {/**/}
                    <span className="bwc-multi-list-item--link-label">
                      Information
                    </span>
                  </a>
                  {/**/}
                  {/**/}
                </div>
              </mat-list-item>
              {/**/}
            </bwc-multi-list-item>
            {/**/}
            {/**/}
            <bwc-multi-list-item className="bwc-multi-list-item ng-star-inserted">
              <mat-list-item className="mat-list-item mat-focus-indicator ng-star-inserted">
                <div className="mat-list-item-content">
                  <div
                    mat-ripple=""
                    className="mat-ripple mat-list-item-ripple"
                  />
                  <div className="mat-list-text" />
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    className="bwc-multi-list-item__link bwc-multi-list-item--link ng-star-inserted"
                    href="/en/information/covid-19"
                    target="_self"
                    aria-label="covid-19"
                  >
                    {/**/}
                    {/**/}
                    <span className="bwc-multi-list-item--link-label bwc-multi-list-item--highlight">
                      Covid-19
                    </span>
                  </a>
                  {/**/}
                  {/**/}
                </div>
              </mat-list-item>
              {/**/}
            </bwc-multi-list-item>
            {/**/}
            {/**/}
            {/**/}
          </mat-nav-list>
        </bwc-multi-list>
      </bwc-top-task>
    </nav>
    {/**/}
    {/**/}
  </header>
  {/**/}
  {/**/}
</bwc-sticky-header>

    )
}