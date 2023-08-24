import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Movies from './Movies';
import TicketPrices from './TicketPrices';
import Deals from './Deals';


export default function NavBar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} className='mt-10 font-medium bg-slate-200'>
            <Tab label="PHIM" value="1" />
            <Tab label="GIÁ VÉ" value="2" />
            <Tab label="ƯU ĐÃI" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1"> <Movies /> </TabPanel>
        <TabPanel value="2" className='flex'> <TicketPrices /> </TabPanel>
        <TabPanel value="3"> <Deals /> </TabPanel>

      </TabContext>
    </Box>
  );
}