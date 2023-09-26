import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MoviesList from '../../common/MoviesList';
// import { isEqual } from 'lodash';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography> {children} </Typography>
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
    id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Movies({ popularMovies }) {
  const [value, setValue] = React.useState(0);

  //derived state
  const adventureActionMovies = popularMovies.filter(p => p.genre_ids.includes(28) || p.genre_ids.includes(12))   // p => isEqual(p.genre_ids, [16, 35, 10751, 14, 10749])
  const familyRomanticMovies = popularMovies.filter(p => p.genre_ids.includes(18) || p.genre_ids.includes(10749) || p.genre_ids.includes(10751))
  const fictionScienceTMovies = popularMovies.filter(p => p.genre_ids.includes(878) || p.genre_ids.includes(14))
  const dramaThrillerMovies = popularMovies.filter(p => p.genre_ids.includes(27) || p.genre_ids.includes(9648) || p.genre_ids.includes(80))
  const Animation = popularMovies.filter(p => p.genre_ids.includes(35) || p.genre_ids.includes(16))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',  backgroundColor: 'black' }}
      className='md:flex-row'
    >
      <Tabs
        orientation="vertical" variant="scrollable" value={value} aria-label="Vertical tabs example" 
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className='md:flex-col md:max-w-[300px]'
      >
        <Tab label="Hành động & Phiêu lưu" {...a11yProps(0)} className={`text-white ${value===0 && 'text-blue-400'}`} />
        <Tab label="Gia đình & Tình cảm" {...a11yProps(1)} className={`text-white ${value===1 && 'text-blue-400'}`} />
        <Tab label="Viến tưởng & Khoa học" {...a11yProps(2)} className={`text-white ${value===2 && 'text-blue-400'}`} />
        <Tab label="Kinh dị & Mạo hiểm" {...a11yProps(3)} className={`text-white ${value===3 && 'text-blue-400'}`} />
        <Tab label="Hoạt hình & Hài kịch" {...a11yProps(4)} className={`text-white ${value===4 && 'text-blue-400'}`} />
      </Tabs>

      <TabPanel value={value} index={0} className='flex-1'>
        <MoviesList commonCateGoryMovies={adventureActionMovies} />
      </TabPanel>

      <TabPanel value={value} index={1} className='flex-1'>
        <MoviesList commonCateGoryMovies={familyRomanticMovies} />
      </TabPanel>

      <TabPanel value={value} index={2} className='flex-1'>
        <MoviesList commonCateGoryMovies={fictionScienceTMovies} />
      </TabPanel>

      <TabPanel value={value} index={3} className='flex-1'>
        <MoviesList commonCateGoryMovies={dramaThrillerMovies} />
      </TabPanel>

      <TabPanel value={value} index={4} className='flex-1'>
        <MoviesList commonCateGoryMovies={Animation} />
      </TabPanel>
    </Box>
  );
}