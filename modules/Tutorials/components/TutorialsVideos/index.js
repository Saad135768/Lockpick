import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from './style'
import ReactPlayer from 'react-player/lazy'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { CMS } from '../../../Home/Header/data'
import { useQuery } from '@apollo/react-hooks'
import { pathOr } from 'ramda'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {
  const { data: cmsData } = useQuery(CMS)

  const [value, setValue] = useState(0)
  const [searchTerm, setSearchTerm] = useState()

  const router = useRouter()
  const { asPath } = router

  const items = pathOr([], ['cms', 'secondarySlider'], cmsData)

  useEffect(() => {
    //  This condition checks if the user navigates to this page through pressing on 'while download....'btn,
    //   the second video should be the default one
    if (asPath.includes('download')) setValue(1)
  }, [])

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  const search = (e) => items.find(({ name }, index) => {
    const searched = name.toLowerCase().includes(e.toLowerCase())
    if (searched) setValue(index)
    return searched
  })

  const classes = useStyles()

  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for videos ..."
          onChange={e => {
            setSearchTerm(e.target.value)
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              search(searchTerm)
              // setSearchTerm()
            }
          }}
        />
        <button
          onClick={() => {
            search(searchTerm)
            // setSearchTerm()
          }}
          type="button"
          className="searchButton"
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          indicatorColor="primary"
          classes={{ indicator: classes.indicator }}
        >
          {items.map(
            ({ name, url }, index) => (
              <Tab label={name} {...a11yProps(index)} key={url} />
            ),
          )}
        </Tabs>
        {items.map(
          ({ name, url }, index) => (
            <TabPanel
              className={classes.width}
              key={url}
              value={value}
              index={index}
            >
              {name}
              <ReactPlayer
                className="react-player"
                url={url}
                width="100%"
                height="330px"
                controls={true}
                playing={false}
                autoPlay={false}
              />
            </TabPanel>
          ),
        )}
      </div>
    </>
  )
}
