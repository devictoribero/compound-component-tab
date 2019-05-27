import React from "react";
import { Tabs } from "./components/Tabs";
import { TabList } from "./components/TabList";
import { Tab } from "./components/Tab";
import { TabPanels } from "./components/TabPanels";
import { TabPanel } from "./components/TabPanel";
import { Socials } from "./components/Socials";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tabs created using Compound Component Pattern</h1>
      <Tabs>
        <TabList>
          <Tab>Who Am I</Tab>
          <Tab>Image</Tab>
          <Tab>Surprise</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>I'm a front-end developer 👨‍💻 and I live to connect with people' souls ❤️.</p>
            <p>I do sport 🏋️, I love yoga 🧘, I practice meditation 🙏, I travel always I can 🛫 and I question everything about life.</p>
          </TabPanel>
          <TabPanel>
            <img
              src="https://media3.giphy.com/media/nNxT5qXR02FOM/giphy.gif"
              alt="A cat moving his body in a weird way. It looks he is dancing"/>
          </TabPanel>
          <TabPanel>
            <img
              src="https://media1.giphy.com/media/10hO3rDNqqg2Xe/giphy.gif"
              alt="A cat moving his body in a weird way. It looks he is dancing"/>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Socials />
    </div>
  );
}

export default App;
