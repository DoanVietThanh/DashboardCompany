import BookForecast from './BookForecast';
import { StyledDashboardOverview } from './Overiew.styled';
import Reservation from './Reservation';

const Overview = () => {
  return (
    <StyledDashboardOverview>
      <Reservation />
      <BookForecast />
    </StyledDashboardOverview>
  );
};

export default Overview;
