// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
// import VolumeDown from '@mui/icons-material/VolumeDown'
// import VolumeUp from '@mui/icons-material/VolumeUp'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import ChartjsBarChart from 'src/views/charts/chartjs/ChartjsBarChart'
import ChartjsLineChart from 'src/views/charts/chartjs/ChartjsLineChart'
import ChartjsAreaChart from 'src/views/charts/chartjs/ChartjsAreaChart'
import ChartjsRadarChart from 'src/views/charts/chartjs/ChartjsRadarChart'
import ChartjsBubbleChart from 'src/views/charts/chartjs/ChartjsBubbleChart'
import ChartjsScatterChart from 'src/views/charts/chartjs/ChartjsScatterChart'
import ChartjsPolarAreaChart from 'src/views/charts/chartjs/ChartjsPolarAreaChart'
import ChartjsHorizontalBarChart from 'src/views/charts/chartjs/ChartjsHorizontalBarChart'
import TableStickyHeader from 'src/views/table/mui/TableStickyHeaderWithoutPage'
import Modal from '@mui/material/Modal'

// ** Third Party Styles Import
import 'chart.js/auto'

const columns = [
  { id: 'year', label: 'Year' },
  { id: 'interest', label: 'Interest' },
  { id: 'principal', label: 'Principal', align: 'right' },
  { id: 'total', label: 'Total', align: 'right' },
  { id: 'ltv', label: 'LTV', align: 'right' },
  { id: 'balance', label: 'Balance', align: 'right' }
]

const rows = [
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 },
  { year: 2023, interest: 22345.08, principal: 244.01, total: 2800.1, ltv: 99.4, balance: 39591.24 }
]

const SliderValue = styled('label')({
  placeSelf: 'center'
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const TabsFullWidth = () => {
  // ** Hook
  const theme = useTheme()

  // Vars
  const whiteColor = '#fff'
  const yellowColor = '#ffe802'
  const primaryColor = '#836af9'
  const areaChartBlue = '#2c9aff'
  const barChartYellow = '#ffcf5c'
  const polarChartGrey = '#4f5d70'
  const polarChartInfo = '#299aff'
  const lineChartYellow = '#d4e157'
  const polarChartGreen = '#28dac6'
  const lineChartPrimary = '#9e69fd'
  const lineChartWarning = '#ff9800'
  const horizontalBarInfo = '#26c6da'
  const polarChartWarning = '#ff8131'
  const scatterChartGreen = '#28c76f'
  const warningColorShade = '#ffbd1f'
  const areaChartBlueLight = '#84d0ff'
  const areaChartGreyLight = '#edf1f4'
  const scatterChartWarning = '#ff9f43'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  // ** State
  const [value, setValue] = useState('1')
  const [value1, setValue1] = useState('1')
  const [value2, setValue2] = useState('2')
  const [value3, setValue3] = useState(30)

  const handleChange3 = (event, newValue) => {
    setValue3(newValue)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChange1 = (event, newValue) => {
    setValue1(newValue)
  }

  const handleChange2 = (event, newValue) => {
    setValue2(newValue)
  }

  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }

  const [principalValue, setPrincipalValue] = useState(30)
  const [interestValue, setInterestValue] = useState(30)
  const [interestValue1, setInterestValue1] = useState(30)
  const [interestValue2, setInterestValue2] = useState(30)
  const [interestValue3, setInterestValue3] = useState(30)
  const [yearValue, setYearValue] = useState(30)
  const [yearValue1, setYearValue1] = useState(30)
  const [yearValue2, setYearValue2] = useState(30)
  const [paymentValue, setPaymentValue] = useState(30)

  const onChnagePrincipal = (event, val) => {
    setPrincipalValue(val)
  }

  const onChnageInterest = (event, val) => {
    setInterestValue(val)
  }

  const onChnageInterest1 = (event, val) => {
    setInterestValue1(val)
  }

  const onChnageInterest2 = (event, val) => {
    setInterestValue2(val)
  }

  const onChnageInterest3 = (event, val) => {
    setInterestValue3(val)
  }

  const onChnageYear = (event, val) => {
    setYearValue(val)
  }

  const onChnageYear1 = (event, val) => {
    setYearValue1(val)
  }

  const onChnageYear2 = (event, val) => {
    setYearValue2(val)
  }

  const onChnagePayment = (event, val) => {
    setPaymentValue(val)
  }

  const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <Radio value='Principal' onChange={handleOptionChange} checked={selectedOption === 'Principal'} />
          <Stack spacing={1} sx={{ width: '100%' }}>
            <SliderValue>{principalValue}</SliderValue>
            <Slider aria-label='Volume' style={{ color: 'blue' }} value={principalValue} onChange={onChnagePrincipal} />
            <label>Principal</label>
          </Stack>
        </Stack>
        <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <Radio value='Interest' onChange={handleOptionChange} checked={selectedOption === 'Interest'} />
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <Stack spacing={1} sx={{ width: '100%' }}>
                <SliderValue>{interestValue}</SliderValue>
                <Slider
                  aria-label='Volume'
                  style={{ color: 'gray' }}
                  value={interestValue}
                  onChange={onChnageInterest}
                />
                <label>Interest</label>
              </Stack>
            </Grid>
            <Grid item xs={2} md={2}>
              <Stack spacing={1} sx={{ width: '100%' }}>
                <SliderValue>{interestValue1}</SliderValue>
                <Slider
                  aria-label='Volume'
                  style={{ color: 'gray' }}
                  value={interestValue1}
                  onChange={onChnageInterest1}
                />
                <label style={{ opacity: 0 }}>Years</label>
              </Stack>
            </Grid>
            <Grid item xs={2} md={2}>
              <Stack spacing={1} sx={{ width: '100%' }}>
                <SliderValue>{interestValue2}</SliderValue>
                <Slider
                  aria-label='Volume'
                  style={{ color: 'gray' }}
                  value={interestValue2}
                  onChange={onChnageInterest2}
                />
                <label style={{ opacity: 0 }}>Years</label>
              </Stack>
            </Grid>
            <Grid item xs={2} md={2}>
              <Stack spacing={1} sx={{ width: '100%' }}>
                <SliderValue>{interestValue3}</SliderValue>
                <Slider
                  aria-label='Volume'
                  style={{ color: 'gray' }}
                  value={interestValue3}
                  onChange={onChnageInterest3}
                />
                <label style={{ opacity: 0 }}>Years</label>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <Radio value='Years' onChange={handleOptionChange} checked={selectedOption === 'Years'} />
          <Stack spacing={1} sx={{ width: '100%' }}>
            <SliderValue>{yearValue}</SliderValue>
            <Slider aria-label='Volume' style={{ color: '#ff9800' }} value={yearValue} onChange={onChnageYear} />
            <label>Years</label>
          </Stack>
          <Stack spacing={1} sx={{ width: '100%' }}>
            <SliderValue>{yearValue1}</SliderValue>
            <Slider aria-label='Volume' style={{ color: '#ff9800' }} value={yearValue1} onChange={onChnageYear1} />
            <label style={{ opacity: 0 }}>Years</label>
          </Stack>
          <Stack spacing={1} sx={{ width: '100%' }}>
            <SliderValue>{yearValue2}</SliderValue>
            <Slider aria-label='Volume' style={{ color: '#ff9800' }} value={yearValue2} onChange={onChnageYear2} />
            <label style={{ opacity: 0 }}>Years</label>
          </Stack>
        </Stack>
        <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
          <Radio value='Payment' onChange={handleOptionChange} checked={selectedOption === 'Payment'} />
          <Stack spacing={1} sx={{ width: '100%' }}>
            <SliderValue>{paymentValue}</SliderValue>
            <Slider aria-label='Volume' style={{ color: 'green' }} value={paymentValue} onChange={onChnagePayment} />
            <label>Payment</label>
          </Stack>
        </Stack>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TabContext value={value}>
            <TabList variant='fullWidth' onChange={handleChange} aria-label='full width tabs example'>
              <Tab value='1' label='Amort' />
              <Tab value='2' label='Repay' />
              <Tab value='3' label='Balance' />
              <Tab value='4' label='Interest' />
            </TabList>
            <TabPanel value='1'>
              <Box sx={{ width: '100%' }}>
                <ChartjsAreaChart
                  white={whiteColor}
                  blue={areaChartBlue}
                  labelColor={labelColor}
                  borderColor={borderColor}
                  legendColor={legendColor}
                  blueLight={areaChartBlueLight}
                  greyLight={areaChartGreyLight}
                />
              </Box>
            </TabPanel>
            <TabPanel value='2'>
              <ChartjsPolarAreaChart
                yellow={yellowColor}
                info={polarChartInfo}
                grey={polarChartGrey}
                primary={primaryColor}
                green={polarChartGreen}
                legendColor={legendColor}
                warning={polarChartWarning}
              />
            </TabPanel>
            <TabPanel value='3'>
              <ChartjsAreaChart
                white={whiteColor}
                blue={areaChartBlue}
                labelColor={labelColor}
                borderColor={borderColor}
                legendColor={legendColor}
                blueLight={areaChartBlueLight}
                // greyLight={areaChartGreyLight}
              />
            </TabPanel>
            <TabPanel value='4'>
              <ChartjsAreaChart
                white={whiteColor}
                // blue={areaChartBlue}
                labelColor={labelColor}
                borderColor={borderColor}
                legendColor={legendColor}
                // blueLight={areaChartBlueLight}
                greyLight={areaChartGreyLight}
              />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid item xs={12} md={6}>
          <TabContext value={value1}>
            <TabList variant='fullWidth' onChange={handleChange1} aria-label='full width tabs example'>
              <Tab value='1' label='Annual' />
              <Tab value='2' label='Monthly' />
              <Tab value='3' label='Payments' />
              <Tab value='4' label='Summary' />
            </TabList>
            <TabPanel value='1'>
              {/* <Box height={500}> */}
              <TableStickyHeader columns={columns} rows={rows} height={550} />
              {/* </Box> */}
            </TabPanel>
            <TabPanel value='2'>
              <Stack spacing={2} alignItems='center'>
                <label>{yearValue}</label>
                <Slider aria-label='Volume' value={yearValue} onChange={onChnageYear} />
                <TableStickyHeader columns={columns} rows={rows} />
                <Button variant='contained' fullWidth>
                  View Full Schedule
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel value='3'>
              <Stack spacing={2} alignItems='center'>
                <label>{yearValue}</label>
                <Slider aria-label='Volume' value={yearValue} onChange={onChnageYear} />
                <TableStickyHeader columns={columns} rows={rows} />
                <Button variant='contained' fullWidth>
                  View Full Schedule
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel value='4'>
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={4} justifyContent='center' textAlign='center'>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'blue', width: '50%', textAlign: 'right' }}>Property</label>
                      <label>$39835.25</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>Start date</label>
                      <label>Sep 1, 2018</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'green', width: '50%', textAlign: 'right' }}>Downpay</label>
                      <label>$0</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>End date</label>
                      <label>Sep 1, 2050</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'blue', width: '50%', textAlign: 'right' }}>Principal</label>
                      <label>$39835.25</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>Length</label>
                      <label>32y 1m</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'red', width: '50%', textAlign: 'right' }}>Interest</label>
                      <label>7.721%</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>Reduction</label>
                      <label>None</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>Term</label>
                      <label>32 years, 1 month</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'red', width: '50%', textAlign: 'right' }}>Total int</label>
                      <label>$67,968.49</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'green', width: '50%', textAlign: 'right' }}>Payment</label>
                      <label>$280.01</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'green', width: '50%', textAlign: 'right' }}>Total pay</label>
                      <label>$107,803.74</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'red', width: '50%', textAlign: 'right' }}>Expenses</label>
                      <label>$0.06</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: '#ff9800', width: '50%', textAlign: 'right' }}>Extra pay</label>
                      <label>$0.00</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'green', width: '50%', textAlign: 'right' }}>Total</label>
                      <label>$280.07</label>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Stack spacing={2} direction='row'>
                      <label style={{ color: 'green', width: '50%', textAlign: 'right' }}>Savings</label>
                      <label>$0.00</label>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <TabContext value={value2}>
          <TabList variant='fullWidth' onChange={handleChange2} aria-label='full width tabs example'>
            <Tab value='1' label='Loan Data' />
            <Tab value='2' label='Expenses' />
            <Tab value='3' label='Prepayment' />
            <Tab value='4' label='Extra' />
            <Tab value='5' label='Fixed' />
            <Tab value='6' label='Interest' />
            <Tab value='7' label='ARM' />
          </TabList>
          <TabPanel value='1'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Property value'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'blue' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Principal'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'blue' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Payment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Downpayment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Interest'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid items xs={12} md={4}></Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Downpayment %'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Years'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={8} direction='row' alignItems='center'>
                  <TextField
                    id='standard-basic'
                    label='Strat date'
                    variant='standard'
                    InputLabelProps={{
                      style: { color: '#ff9800' }
                    }}
                  />
                  <label>Mar 1, 2008</label>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='2'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  id='monthly1'
                  label='Monthly expense #1'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Monthly HOA'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Monthly expense #2'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Annual insurance'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Monthly expense #3'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Annual tax'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='3'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  id='monthly1'
                  label='Monthly prepayment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Semi-anuual prepayment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Annual prepayment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='One-time prepayment'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Month'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='4'>
            <Grid container rowSpacing={4} columnSpacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  id='monthly1'
                  label='Extra prepayment #1'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Extra prepayment #2'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Extra prepayment #3'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant='contained' fullWidth>
                  View Full Schedule
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='5'>
            <Grid container rowSpacing={4} columnSpacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  id='monthly1'
                  label='Fixed prepayment #1'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Fixed prepayment #2'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Fixed prepayment #3'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Fixed prepayment #4'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='6'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  id='monthly1'
                  label='Interest % #1'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Interest % #2'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Interest-only payments'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'green' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id='standard-basic'
                  label='End month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant='contained' fullWidth>
                  View Full Schedule
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='7'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  id='monthly1'
                  label='Start month #'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Starting rate %'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Fix rate for # months'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Expected adjustment %'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Adjust % every # months'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: '#ff9800' }
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='standard-basic'
                  label='Interest rate cap %'
                  type='number'
                  variant='standard'
                  InputLabelProps={{
                    style: { color: 'red' }
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h4' component='h2'>
            Welcome aboard!
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mt: 5 }}>
            Do you know Skype or Telegram?
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Telegram: @GetherDev
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Skype: live:.cid.2a4aeee74c16c2b7
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mt: 5 }}>
            We shouldn't talk the word 'Skype' or 'Telegram' on freelancer.com.
          </Typography>
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mt: 5 }}>
            Please contact me by Skype or Telegram for more comfortable conversation.
          </Typography>
        </Box>
      </Modal> */}
    </Box>
  )
}

export default TabsFullWidth
