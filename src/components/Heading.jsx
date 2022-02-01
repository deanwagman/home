import { getToday } from "../util/";

const Heading = ({ value }) => <h1>{value}</h1>;
const Today = () => <Heading value={getToday()} />;

export default Today;
