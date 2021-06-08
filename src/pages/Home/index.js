import Card from '../../components/Card';
import styled from 'styled-components';

function Home() {
  return (
    <CardBox>
      <Card name="Plant Manager" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"/>
      <Card name="Plant Manager" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150"/>
      <Card name="Plant Manager" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"/>
      <Card name="Plant Manager" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450"/>
    </CardBox>
  );
}

  
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Home;
