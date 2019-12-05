import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './PageGraphics.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function PageGraphics(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  ReactGA.initialize('UA-151341720-2');
  ReactGA.pageview('/graficos');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Content Graphics">
      <div className="margin">
        <div className="Graphics_content">
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="RPP" {...a11yProps(0)} />
              <Tab label="Peru21" {...a11yProps(1)} />
              <Tab label="El Comercio" {...a11yProps(2)} />
              <Tab label="Consolidado" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <h2 className="Tab__title">Fuente: RPP</h2>
              <iframe 
              width="100%" 
              height="600" 
              title="RPP-category"
              src="https://app.powerbi.com/view?r=eyJrIjoiMTE4Mzk5NGEtNWM0My00Y2Y5LTk5OTEtZjJmZGFiZjEyZjc0IiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}"></iframe>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <h2 className="Tab__title">Fuente: PERÚ21</h2>
            <iframe 
            width="100%"
            height="600" 
            title="peru21-category"
            src="https://app.powerbi.com/view?r=eyJrIjoiZjc3ZmU4NWItYzRlZi00MGU3LWI0ZjMtNDhmZGI3Nzg2OWJlIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}"></iframe>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <h2 className="Tab__title">Fuente: El Comercio</h2>
            <iframe 
            width="100%" 
            height="600" 
            title="elcomercio-category"
            src="https://app.powerbi.com/view?r=eyJrIjoiMjVkODM3MzItOGYwYS00M2QzLWJjOWEtMGJiYzBlNzkyOWM2IiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}"></iframe>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <h2 className="Tab__title">Todas las fuentes</h2>
            <iframe width="100%" height="600"
            title="all-category"
            src="https://app.powerbi.com/view?r=eyJrIjoiYWMwYTFkZTUtOGZlMi00ZWQzLThhOTctYmQ1ZTkwZWExNGZlIiwidCI6IjAyZDUxZmEyLWM5MDEtNDc0Yy1iOGUxLTYwMzQ2OTVjYTEyNiIsImMiOjR9" frameBorder="0" allowFullScreen="{true}"></iframe>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}