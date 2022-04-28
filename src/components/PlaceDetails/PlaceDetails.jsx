import React from "react";
import useStyles from "./style";
import Rating from "@material-ui/lab/Rating";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

export default function PlaceDetails({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://webstockreview.net/images/cook-clipart-cooking-demo-7.png"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Rating</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBotom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place?.address && (
          <Typography
            gutterBotom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
