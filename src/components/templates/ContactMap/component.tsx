/* eslint-disable react/require-default-props */
import GoogleMapReact from 'google-map-react';
import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import useScrollInfinite from 'hooks/useScrollInfinite';
import mapModifiers from 'utils/functions';

export interface PositionMarker {
  lat: number;
  lng: number;
}

export interface AddressItemProps {
  label?: string;
  address?: string;
  phone?: string;
  textContact?: string;
  position: PositionMarker;
}

export const AddressItem: React.FC<
  AddressItemProps & {
    onClick?: () => void;
  }
> = ({
  label, address, phone, textContact, onClick,
}) => (
  <div
    className="m-addressItem"
    onClick={onClick}
  >
    <Text
      modifiers={['gambogeOrange', '16x28', '700', 'uppercase']}
      content={label}
    />
    <div className="u-mt-4">
      <Text modifiers={['davyGrey', '12x18']} content={address} />
      <Text modifiers={['davyGrey', '12x18']}>
        {`${textContact}: `}
        <span className="m-addressItem_highlight">{phone}</span>
      </Text>
    </div>
  </div>
);

export interface InfoAddressProps {
  list?: AddressItemProps[];
  title?: string;
  headQuarterIdx?: number;
  onClick?: (item: AddressItemProps, idx: number) => void;
  handleLoadMore?: () => void
}

export const InfoAddress: React.FC<InfoAddressProps> = ({
  list,
  title,
  headQuarterIdx,
  onClick,
  handleLoadMore,
}) => {
  const { setNode } = useScrollInfinite(handleLoadMore);
  return (
    <div className="o-infoAddress">
      <div className="o-infoAddress_heading">
        <Heading
          type="h4"
          modifiers={['s015', 'white', 'uppercase']}
          content={title}
        />
      </div>
      <div className="o-infoAddress_wrapper">
        <div className="o-infoAddress_content">
          <div className="o-infoAddress_list">
            {list?.map((x, i) => (
              <div
                ref={i + 1 === list.length ? (node) => setNode(node) : undefined}
                key={`item-${i.toString()}`}
                className={mapModifiers(
                  'o-infoAddress_item',
                  headQuarterIdx === i && 'active',
                )}
              >
                <AddressItem onClick={() => onClick && onClick(x, i)} {...x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface GoogleMapProps {
  list?: AddressItemProps[];
  mapApiKey?: string;
  zoomPosition?: PositionMarker;
  zoomView?: number;
}

export const MapContact: React.FC<PositionMarker> = () => (
  <div className="o-googleMap_marker">
    <Icon size="36" iconName="markerGgMap" />
  </div>
);

export const GoogleMap: React.FC<GoogleMapProps> = ({
  mapApiKey,
  zoomPosition,
  zoomView,
  list,
}) => (
  <div className="o-googleMap">
    <div className="o-googleMap_map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${mapApiKey}&libraries=places,geometry`,
        }}
        center={zoomPosition}
        zoom={zoomView}
        options={{
          zoomControl: true,
          mapTypeControl: false,
          fullscreenControl: true,
          panControl: true,
        }}
      >
        {list?.map((x, i) => (
          <MapContact
            key={`index-${i.toString()}`}
            lat={x.position.lat}
            lng={x.position.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  </div>
);
