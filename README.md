# Crowdfund Campaigns

A modern Angular application for discovering, viewing, and supporting fundraising campaigns.  
Built with Angular standalone components, Apollo GraphQL, and a responsive, accessible UI.

---

## Features

- **Campaigns List:** Browse all active fundraising campaigns.
- **Campaign Details:** View campaign progress, donors, and contribute directly.
- **GraphQL Integration:** Fetch campaign data using Apollo Angular from a remote GraphQL API.
- **Responsive Design:** Fully responsive for desktop, tablet, and mobile.
- **Non-blocking Error Handling:** Gracefully handles partial GraphQL errors and displays non-blocking notifications.
- **Modern UI:** Clean, accessible, and user-friendly interface.

---

## Live preview
[Live link on firebase hosting:](https://campaigns-sample-ca1ec.web.app/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (v16+ recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/crowdfund-campaigns.git
   cd crowdfund-campaigns
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve
   ```
   The app will be available at [http://localhost:4200](http://localhost:4200).

---

## Project Structure

```
src/
  app/
    features/
      campaigns/
        pages/
          campaigns-list/
          campaign-details/
        services/
        interfaces/
    shared/
      components/
        header/
        ...
    core/
      interceptors/
      ...
  assets/
  styles/
```

---

## API

- **REST:**  
  `https://raise-right-assessment-mocks.up.railway.app/api/campaigns`
- **GraphQL:**  
  `https://raise-right-assessment-mocks.up.railway.app/graphql`

---

## Technologies

- Angular Standalone Components
- Apollo Angular (GraphQL)
- RxJS
- SCSS (BEM methodology)
- Responsive Design

---

## Error Handling

- The app uses Apollo's `errorPolicy: 'all'` to handle partial GraphQL errors.
- If the API returns partial data with errors, a non-blocking notification is shown while rendering available data.

---

## Customization

- Update campaign card and details styles in their respective SCSS files.
- Add new features or pages by following the existing folder structure and BEM CSS conventions.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Angular](https://angular.io/)
- [Apollo Angular](https://apollo-angular.com/)
- [Raise Right Assessment Mocks API](https://raise-right-assessment-mocks.up.railway.app/)
