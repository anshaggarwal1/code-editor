/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/jsx-key
const CodeCard = ({ title, description, color }) => {
  return (
    <Card sx={{ minWidth: 275, background: color }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, color: "#fff" }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: "#fff" }} component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#fff" }}>
          View Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default CodeCard;
