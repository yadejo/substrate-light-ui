// Copyright 2018-2019 @paritytech/substrate-light-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { PureComponent } from 'react';
import SUIAccordion from 'semantic-ui-react/dist/commonjs/modules/Accordion';

type Props = {
  [index: string]: any
};

export class Accordion extends PureComponent<Props> {
  // TODO: move away from the defaults and use custom subcomponents
  static Accordion = SUIAccordion.Accordion;
  static Content = SUIAccordion.Content;
  static Title = SUIAccordion.Title;

  render () {
    return (
      <SUIAccordion
        {...this.props}
      />
    );
  }
}
