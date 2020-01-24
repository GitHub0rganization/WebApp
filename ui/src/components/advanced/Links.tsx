import {MDBCard, MDBCol, MDBIcon, MDBRow} from 'mdbreact';
import React from 'react';

export const Links = () => {
  const data = [
    {
      provider: 'wantedly',
      id: '@irohkiissssssss',
    },
    {
      provider: 'twitter',
      id: '@huslc2es',
    },
    {
      provider: 'github',
      id: '@irohkiissssssss',
    },
    {
      provider: 'instagram',
      id: '@irohkiissssssss',
    },
    {
      provider: 'linkedin',
      id: '@irohkiissssssss',
    },
    {
      provider: 'note',
      id: '@irohkiissssssss',
    },
    {
      provider: 'twitch',
      id: '@irohkiisssssss',
    },
    {
      provider: 'gitlab',
      id: '@irohkiissssssss',
    },
    {
      provider: 'youtube',
      id: '@irohkiissssssss',
    },
  ];

  return (
    <MDBRow>
      <MDBCol sm="12">
        {data.map((data) => {
          return (
            <a href={`https://${data.provider}.com`}>
              <MDBCard className="my-3 d-flex flex-row align-items-center round">
                <img
                  src={require(`../../assets/images/${data.provider}.png`)}
                  className="float-left m-3"
                  alt="aligment"
                  style={{width: '50px', height: '50px'}}
                />
                <p className="m-0">{data.id}</p>
                <MDBIcon className="text-right" icon="angle-right" />
              </MDBCard>
            </a>
          );
        })}
      </MDBCol>
    </MDBRow>
  );
};
