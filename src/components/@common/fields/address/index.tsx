import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styled from "styled-components";

import { useLocalizationContext } from "../../../../../localization";
import { Field } from "../field";

const GOOGLE_PLACES_API_KEY = "YOUR_API_KEY";

const StyledField = styled(Field)`
  min-height: 100%;
`;

export const AddressInput = ({
  onSelectAddress,
  placeholder = "Address",
}: {
  onSelectAddress: (address: string) => void;
  placeholder?: string;
}) => {
  const { locale } = useLocalizationContext();

  return (
    <StyledField label="Address">
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={(data, details = null) => {
          onSelectAddress(data.description);
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: locale,
        }}
        styles={{
          textInput: {
            borderColor: "#67869e",
            borderWidth: "1px",
          },
        }}
      />
    </StyledField>
  );
};
