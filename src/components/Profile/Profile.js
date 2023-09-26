import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MovieSearch from '../Header/MovieSearch';
import UserInfo from './UserInfo';
import Support from './Support';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='block '>
            <MovieSearch />

            <Box sx={{ flexGrow: 1, flexDirection: 'column'  }} className='mt-[64px]' >
                <Tabs
                    orientation="horizontal"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="Thông tin" {...a11yProps(0)} />
                    <Tab label="Hỗ trợ" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <UserInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Support />
                </TabPanel>
            </Box>
        </div>

    )
}
