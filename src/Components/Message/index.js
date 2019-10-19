import React, { Fragment } from "react";
import moment from "moment";
import "./Message.css";
import { ListItem, Chip } from "@material-ui/core";

export default function Message(props) {
  const {data, owner} = props;

  const timestamp = moment(data.timestamp).calendar();
  return (
    <Fragment>
      <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: owner === data.author ? 'flex-end' : 'flex-start' }}>
        <Chip label={data.message} color={ owner === data.author ? 'default' : 'primary' }>
        </Chip>
        <div><span style={{ fontSize: '0.6em' }}>{timestamp}</span></div>
      </ListItem>
    </Fragment>
  );
}
