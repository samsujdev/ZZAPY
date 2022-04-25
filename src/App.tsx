import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Page3 from './pages/html/Page3';
import Page4 from './pages/html/Page4';
import Page5 from './pages/html/Page5';
import Page6 from './pages/html/Page6';
import Page1011 from './pages/html/Page1011';
import Page12 from './pages/html/Page12';
import Page13 from './pages/html/Page13';
import Page14 from './pages/html/Page14';
import Page19 from './pages/html/Page19';
import Page21 from './pages/html/Page21';
import Page22 from './pages/html/Page22';
import Page232425 from './pages/html/Page232425';
import Page2829 from './pages/html/Page2829';
import Page3233 from './pages/html/Page3233';
import Page3435 from './pages/html/Page3435';
import Page3637 from './pages/html/Page3637';
import Page38 from './pages/html/Page38';
import Page39 from './pages/html/Page39';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/page-3">
          <Page3 />
        </Route>
        <Route path="/page-4">
          <Page4 />
        </Route>
        <Route path="/page-5">
          <Page5 />
        </Route>
        <Route path="/page-6">
          <Page6 />
        </Route>
        <Route path="/page-10-11">
          <Page1011 />
        </Route>
        <Route path="/page-12">
          <Page12 />
        </Route>
        <Route path="/page-13">
          <Page13 />
        </Route>
        <Route path="/page-14">
          <Page14 />
        </Route>
        <Route path="/page-19">
          <Page19 />
        </Route>
        <Route path="/page-21">
          <Page21 />
        </Route>
        <Route path="/page-22">
          <Page22 />
        </Route>
        <Route path="/page-23-24-25">
          <Page232425 />
        </Route>
        <Route path="/page-28-29">
          <Page2829 />
        </Route>
        <Route path="/page-32-33">
          <Page3233 />
        </Route>
        <Route path="/page-34-35">
          <Page3435 />
        </Route>
        <Route path="/page-36-37">
          <Page3637 />
        </Route>
        <Route path="/page-38">
          <Page38 />
        </Route>
        <Route path="/page-39">
          <Page39 />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
