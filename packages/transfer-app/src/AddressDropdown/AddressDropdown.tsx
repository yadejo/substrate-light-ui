// Copyright 2018-2019 @paritytech/substrate-light-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Dropdown } from '@substrate/ui-components';
import React from 'react';

interface Props {
  addresses: string[];
}

export class AddressDropdown extends React.PureComponent<Props> {
  render () {
    console.log(Dropdown);

    return (
      <p>HELLO</p>
    );
  }
}