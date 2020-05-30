import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState, Component, Text} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import { Avatar, Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;


  export  default function Index() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <style> @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');</style>
        <Layout>
            <div style={{ padding: 35, background: 'rgb(160, 136, 168)'}}></div>
            <div style={{ padding: 24, background: '#fff', minHeight: 360, fontSize: 175, textAlign: "center", display: "flex", justifyContent: 'center', alignItems: 'center', color: 'rgb(75,0,130)'}}><img src = "./wePoollogo.png" style = {{width: 350, height: 350}}></img><span style={{color: '#330669'}}>we</span><span style={{}}>Pool</span></div>
            <div style={{ padding: 35, background: 'rgb(160, 136, 168)', color: 'white', fontSize: 22, fontFamily: 'Lato', textAlign: 'center'}}>Intelligent pooling for efficient COVID-19 testing</div>
            <div style={{ padding: 30, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 40, fontFamily: 'Lato', textAlign: 'center'}}>About wePool</div>
            <div style={{ paddingBottom: 30, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 30, fontFamily: 'Lato', textAlign: 'center'}}>Background</div>
            <div style={{ padding: 0, background: 'rgb(101, 72, 132)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            To contain the current COVID-19 pandemic, and prevent future relapses, a drastic ramp-up of testing is needed across the United States and the world. However, shortages of supplies and an overwhelmed healthcare system is barring that from being possible. Therefore, we need to maximize the information we obtain per test.</div>
            <div style={{ padding: 30, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 30, fontFamily: 'Lato', textAlign: 'center'}}>Mission</div>
            <div style={{ padding: 0, background: 'rgb(101, 72, 132)', minHeight: 50, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            Provide computational testing strategies for efficient disease management</div>
            <div style={{ padding: 30, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 30, fontFamily: 'Lato', textAlign: 'center'}}>Vision</div>
            <div style={{ padding: 0, background: 'rgb(101, 72, 132)', minHeight: 50, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            Fast and effective testing for everyone</div>
            <div style={{ padding: 23, background: 'rgb(101, 72, 132)', minHeight: 10, color: 'white', fontSize: 22, fontFamily: 'Lato', textAlign: 'center'}}></div>
            <div style={{ padding: 30, background: 'rgb(160, 136, 168)', minHeight: 60, color: 'white', fontSize: 36, fontFamily: 'Lato', textAlign: 'center'}}>Our team</div>
            <div style={{ paddingBottom: 40, background: 'rgb(160, 136, 168)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>We are an interdisciplinary team with a rich and diverse background that puts us in an ideal position to tackle and solve the challenge we are proposing. We are a group that came together during the MIT COVID19 CHALLENGE, a 48-hour hackathon geared towards tackling several issues related to COVID-19. Partnered with mentors and experts in the field, our team focused on testing efficiency in the face of test shortages around the globe. A group of healthcare and data science experts judged all presentations and selected a few winning teams. We are one of these selected winners.</div>
            <div style={{ padding: 20, background: 'rgb(160, 136, 168)', minHeight: 430, paddingLeft: '10%'}}>
            <Row gutter={25}>
            <Col span={8}>
            <Card style={{ width: 200 , height: 180}} bordered={false} cover={<img src="./guillermo.png"/>} style={{backgroundColor: 'rgb(160, 136, 168)', color: 'white', width: 180, height: 180, fontFamily: "Lato", alignContent: 'center'}}>
            <p style={{fontSize: 20}}>Guillermo Siman</p>
            <p style={{fontSize: 16}}>Guillermo has a background in business & technology, and is an MIT Sloan MBA student</p> 
            </Card>
            </Col>
            <Col span={8}>
            <Card style={{ width: 180 , height: 180}} bordered={false} cover={<img src="./yash.png" />} style={{backgroundColor: 'rgb(160, 136, 168)', color: 'white', width: 180, height: 180, fontFamily: "Lato", alignContent: 'center'}}>
            <p style={{fontSize: 20}}>Yash Patil</p>
            <p style={{fontSize: 16}}>Yash is an operations researcher and data analyst from the Florida Institute of Technology</p> 
            </Card>
            </Col>
            <Col span={8}>
            <Card style={{ width: 180 , height: 180}} bordered={false} cover={<img src="./smrithi.png" />} style={{backgroundColor: 'rgb(160, 136, 168)', color: 'white', width: 180, height: 180, fontFamily: "Lato", alignContent: 'center'}}>
            <p style={{fontSize: 20}}>Smrithi Sunil</p>
            <p style={{fontSize: 16}}>Smrithi is currently a PhD candidate in Biomedical Engineering at Boston University</p> 
            </Card>
            </Col>
            </Row>
        
            </div>
            <div style={{ padding: 0, background: 'rgb(160, 136, 168)', minHeight: 60}}></div>
            <div style={{ padding: 40, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 32, fontFamily: 'Lato', textAlign: 'center'}}>Our approach to solve the current COVID-19 testing shortage</div>
            <div style={{ padding: 0, background: 'rgb(101, 72, 132)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            Pool testing is a test strategy where samples from multiple subjects are combined into a single pool and tested using a single test. If the test is negative then all samples are negative! If the test is positive then one or more samples are positive and can be tested again individually or broken down into smaller groups. Our initial simulations with pool testing have already shown that we can increase testing capacity by 40% while using the same number of tests.
            <p>
              <p></p>
            We can further increase testing capacity by employing intelligent pooling to make efficient use of pool testing. wePool provides a computational testing strategy that uses an individual’s predicted disease prevalence to segment the test population into distinct pools. 
            </p> 
            <p>
              <p></p>
            You can check out our proposal <a href="https://docs.google.com/forms/d/e/1FAIpQLSePb3kKv-3KlznZXIlP2AVExEXpgUCxeSLHH6acGQ8s1zJRvw/viewform?usp=sf_link" style={{}}>here!</a>  
            </p>
            </div>
            <div style={{ padding: 40, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 32, fontFamily: 'Lato', textAlign: 'center'}}>Our impact</div>
            <div style={{ paddingBottom: 40, background: 'rgb(101, 72, 132)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            This strategy will drastically increase our testing capacity, allowing us to redefine the rules for testing and begin to test a lot more people more frequently. This is the testing strategy that will allow America and the rest of the world to safely return to work and prevent future outbreaks.
            </div>
            <div style={{ paddingTop: 30, background: 'rgb(160, 136, 168)', minHeight: 60, color: 'white', fontSize: 33, fontFamily: 'Lato', textAlign: 'center'}}>You can help us beat the pandemic</div>
            <div style={{ padding: 10, background: 'rgb(160, 136, 168)', minHeight: 40, color: 'white', fontSize: 26, fontFamily: 'Lato', textAlign: 'center'}}>Everybody has a role to play... </div>
            <div style={{ paddingTop: 30, background: 'rgb(160, 136, 168)', minHeight: 40, color: 'white', fontSize: 26, fontFamily: 'Lato', textAlign: 'center'}}>Healthcare partners</div>
            <div style={{ paddingBottom: 40, background: 'rgb(160, 136, 168)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>In order to train our model to accurately predict an individual’s disease prevalence we need access to existing test data such as test result, ZIP code, age, sex, vital signs, symptoms, and contact tracing. We are currently looking for partners who are interested in working with us and are able to provide any of the available data.</div>
            <div style={{ paddingTop: 30, background: 'rgb(160, 136, 168)', minHeight: 40, color: 'white', fontSize: 26, fontFamily: 'Lato', textAlign: 'center'}}>Industry partners</div>
            <div style={{ paddingBottom: 40, background: 'rgb(160, 136, 168)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>Once we have our model trained we will validate our model by conducting a randomized clinical trial. We are looking for organizations or research institutions interested in partnering with us to validate intelligent pooling as a testing strategy. </div>
            <div style={{ paddingTop: 30, background: 'rgb(160, 136, 168)', minHeight: 40, color: 'white', fontSize: 26, fontFamily: 'Lato', textAlign: 'center'}}>Concerned citizens</div>
            <div style={{ paddingBottom: 40, background: 'rgb(160, 136, 168)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>While we set up collaborations with healthcare and industry partners you can help us train our model! If you or anyone you know has taken the novel coronavirus test and are willing to volunteer some information please take or pass along <a href= "https://docs.google.com/forms/d/e/1FAIpQLScUsst6TZVPuIbmdc0ChIGOvX5P3Iq5e9gIHXUrsbWwH17Byg/viewform?usp=sf_link" style={{}}>this</a> survey. Any help will be greatly appreciated!</div>
            <div style={{ paddingTop: 30, background: 'rgb(160, 136, 168)', minHeight: 40, color: 'white', fontSize: 26, fontFamily: 'Lato', textAlign: 'center'}}>Future team members</div>
            <div style={{ paddingBottom: 40, background: 'rgb(160, 136, 168)', minHeight: 80, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>We are looking for new members to join our team!</div>
            <div style={{ padding: 40, background: 'rgb(101, 72, 132)', minHeight: 40, color: 'white', fontSize: 32, fontFamily: 'Lato', textAlign: 'center'}}>Contact us</div>
            <div style={{ paddingBottom: 90, background: 'rgb(101, 72, 132)', minHeight: 200, color: 'white', fontSize: 20, fontFamily: 'Lato', textAlign: 'center', paddingLeft: '8%', paddingRight: '8%'}}>
            Please contact us with any questions or comments at: <a href="mailto: info@wepool.ai" style={{}}>info@wepool.ai</a></div>
            <div style={{ padding: 30, background: 'rgb(160, 136, 168)', minHeight: 60, color: 'white', fontSize: 36, fontFamily: 'Lato', textAlign: 'center'}}>In the news</div>
            <div style={{ padding: 30, background: 'rgb(160, 136, 168)', minHeight: 400, color: 'white', fontSize: 36, fontFamily: 'Lato', textAlign: 'center'}}>
            <Row gutter={25}>
            <Col span={8}>
            <Card bordered={false} style={{ width: 400, backgroundColor: 'rgb(101, 72, 132)', color: 'white', fontSize: 20 }}>
              <p>wePool in the news...</p>
              <p><a href="https://mitsloan.mit.edu/press/mit-to-host-virtual-beat-pandemic-ii-hackathon-focus-predicting-preventing-and-preparing" style={{}}>MIT to host virtual Beat Pandemic II Hackathon with focus on predicting, preventing and preparing</a></p>
              <p>… Teams that participated in the earlier Beat the Pandemic hackathon will join a separate track designed to further accelerate their efforts. One such team, wePool, sought to address the challenge of enabling mass testing in a cost-effective and rapid manner. ...</p>
            </Card>
            </Col>
            <Col span={8}>
            <Row gutter={16}>
            <Col span={23}>
            <Card bordered={false} style={{ width: 400, backgroundColor: 'rgb(101, 72, 132)', color: 'white', fontSize: 15 }}>
              <p><a href="https://time.com/5836206/scott-gottlieb-covid-19-testing-systems/" style={{}}>Former FDA Head: Here’s the Testing Strategy We Need to Safely Reopen America</a></p>
              <p>Everyone wants to know when we’ll be safe from COVID-19. The answer is we’re probably in for a long fight. We’ll face a persistent risk, maybe until we get a vaccine, or even after. But that risk can be managed, and reduced, if we focus on helping those at the greatest threat...</p>
            </Card>
            </Col>
            <Col span={1}>
            <Card bordered={false} style={{ width: 400, backgroundColor: 'rgb(101, 72, 132)', color: 'white', fontSize: 15 }}>
              <p><a href="https://www.scientificamerican.com/article/coronavirus-test-shortages-trigger-a-new-strategy-group-screening2/" style={{}}>Coronavirus Test Shortages Trigger a New Strategy: Group Screening</a></p>
              <p>Unless there is widespread testing for COVID-19, experts warn, cases will surge as governments reopen more businesses and public spaces. But there is still a woeful shortage of diagnostic tests for coronavirus infections, because of unprecedented demand for chemicals and supplies...</p>
            </Card>
            </Col>
            </Row>
            <p></p>
            <Row gutter={16}>
            <Col span={23}>
            <Card bordered={false} style={{ width: 400, backgroundColor: 'rgb(101, 72, 132)', color: 'white', fontSize: 15 }}>
              <p><a href="https://www.medicalnewstoday.com/articles/pooling-samples-could-accelerate-new-coronavirus-testing" style={{}}>Pooling samples could accelerate new coronavirus testing</a></p>
              <p>Virologists from Germany have shown that combining samples and only testing individual samples if there is a positive result for the group could massively increase the capacity for coronavirus testing.Testing has been a major limiting factor in the response to the COVID-19 pandemic...</p>
            </Card>
            </Col>
            <Col span={1}>
            <Card bordered={false} style={{ width: 400, backgroundColor: 'rgb(101, 72, 132)', color: 'white', fontSize: 15 }}>
              <p><a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30362-5/fulltext" style={{}}>Pooling of samples for testing for SARS-CoV-2 in asymptomatic people</a></p>
              <p>The ongoing coronavirus disease 2019 (COVID-19) pandemic is a substantial challenge for health-care systems and their infrastructure. RT-PCR-based diagnostic confirmation of infected individuals is crucial to contain viral spread because infection can be asymptomatic despite high viral loads...</p>
            </Card>
            </Col>
            </Row>
            </Col>
            </Row>
            </div>
          </Layout>
        </Layout>
    );
  }

