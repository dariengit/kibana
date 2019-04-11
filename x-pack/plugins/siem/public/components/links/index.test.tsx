/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { mount } from 'enzyme';
import * as React from 'react';
import { mountWithIntl } from 'test_utils/enzyme_helpers';

import { encodeIpv6 } from '../../lib/helpers';

import {
  GoogleLink,
  HostDetailsLink,
  IPDetailsLink,
  ReputationLink,
  VirusTotalLink,
  WhoIsLink,
} from '.';

describe('Custom Links', () => {
  const hostName = 'Host Name';
  const ipv4 = '192.0.2.255';
  const ipv6 = '2001:db8:ffff:ffff:ffff:ffff:ffff:ffff';
  const ipv6Encoded = encodeIpv6(ipv6);

  describe('HostDetailsLink', () => {
    test('should render valid link to Host Details with hostName as the display text', () => {
      const wrapper = mount(<HostDetailsLink hostName={hostName} />);
      expect(wrapper.find('EuiLink').prop('href')).toEqual(
        `#/link-to/hosts/${encodeURIComponent(hostName)}`
      );
      expect(wrapper.text()).toEqual(hostName);
    });

    test('should render valid link to Host Details with child text as the display text', () => {
      const wrapper = mount(<HostDetailsLink hostName={hostName}>{hostName}</HostDetailsLink>);
      expect(wrapper.find('EuiLink').prop('href')).toEqual(
        `#/link-to/hosts/${encodeURIComponent(hostName)}`
      );
      expect(wrapper.text()).toEqual(hostName);
    });
  });

  describe('IPDetailsLink', () => {
    test('should render valid link to IP Details with ipv4 as the display text', () => {
      const wrapper = mount(<IPDetailsLink ip={ipv4} />);
      expect(wrapper.find('EuiLink').prop('href')).toEqual(
        `#/link-to/network/ip/${encodeURIComponent(ipv4)}`
      );
      expect(wrapper.text()).toEqual(ipv4);
    });

    test('should render valid link to IP Details with child text as the display text', () => {
      const wrapper = mount(<IPDetailsLink ip={ipv4}>{hostName}</IPDetailsLink>);
      expect(wrapper.find('EuiLink').prop('href')).toEqual(
        `#/link-to/network/ip/${encodeURIComponent(ipv4)}`
      );
      expect(wrapper.text()).toEqual(hostName);
    });

    test('should render valid link to IP Details with ipv6 as the display text', () => {
      const wrapper = mount(<IPDetailsLink ip={ipv6} />);
      expect(wrapper.find('EuiLink').prop('href')).toEqual(
        `#/link-to/network/ip/${encodeURIComponent(ipv6Encoded)}`
      );
      expect(wrapper.text()).toEqual(ipv6);
    });
  });

  describe('GoogleLink', () => {
    test('it renders text passed in as value', () => {
      const wrapper = mountWithIntl(
        <GoogleLink link={'http:/example.com/'}>{'Example Link'}</GoogleLink>
      );
      expect(wrapper.text()).toEqual('Example Link');
    });

    test('it renders props passed in as link', () => {
      const wrapper = mountWithIntl(
        <GoogleLink link={'http:/example.com/'}>{'Example Link'}</GoogleLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        'https://www.google.com/search?q=http:/example.com/'
      );
    });

    test("it encodes <script>alert('XSS')</script>", () => {
      const wrapper = mountWithIntl(
        <GoogleLink link={"http:/example.com?q=<script>alert('XSS')</script>"}>
          {'Example Link'}
        </GoogleLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        "https://www.google.com/search?q=http:/example.com?q=%3Cscript%3Ealert('XSS')%3C/script%3E"
      );
    });
  });

  describe('ReputationLink', () => {
    test('it renders link text', () => {
      const wrapper = mountWithIntl(
        <ReputationLink domain={'192.0.2.0'}>{'Example Link'}</ReputationLink>
      );
      expect(wrapper.text()).toEqual('Example Link');
    });

    test('it renders correct href', () => {
      const wrapper = mountWithIntl(
        <ReputationLink domain={'192.0.2.0'}>{'Example Link'} </ReputationLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        'https://www.talosintelligence.com/reputation_center/lookup?search=192.0.2.0'
      );
    });

    test("it encodes <script>alert('XSS')</script>", () => {
      const wrapper = mountWithIntl(
        <ReputationLink domain={"<script>alert('XSS')</script>"}>{'Example Link'}</ReputationLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        "https://www.talosintelligence.com/reputation_center/lookup?search=%3Cscript%3Ealert('XSS')%3C/script%3E"
      );
    });
  });

  describe('VirusTotalLink', () => {
    test('it renders sha passed in as value', () => {
      const wrapper = mountWithIntl(<VirusTotalLink link={'abc'}>{'Example Link'}</VirusTotalLink>);
      expect(wrapper.text()).toEqual('Example Link');
    });

    test('it renders sha passed in as link', () => {
      const wrapper = mountWithIntl(
        <VirusTotalLink link={'abc'}>{'Example Link'} </VirusTotalLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual('https://www.virustotal.com/#/search/abc');
    });

    test("it encodes <script>alert('XSS')</script>", () => {
      const wrapper = mountWithIntl(
        <VirusTotalLink link={"<script>alert('XSS')</script>"}>{'Example Link'}</VirusTotalLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        "https://www.virustotal.com/#/search/%3Cscript%3Ealert('XSS')%3C/script%3E"
      );
    });
  });

  describe('WhoisLink', () => {
    test('it renders ip passed in as domain', () => {
      const wrapper = mountWithIntl(<WhoIsLink domain={'192.0.2.0'}>{'Example Link'}</WhoIsLink>);
      expect(wrapper.text()).toEqual('Example Link');
    });

    test('it renders correct href', () => {
      const wrapper = mountWithIntl(<WhoIsLink domain={'192.0.2.0'}>{'Example Link'} </WhoIsLink>);
      expect(wrapper.find('a').prop('href')).toEqual('https://www.iana.org/whois?q=192.0.2.0');
    });

    test("it encodes <script>alert('XSS')</script>", () => {
      const wrapper = mountWithIntl(
        <WhoIsLink domain={"<script>alert('XSS')</script>"}>{'Example Link'}</WhoIsLink>
      );
      expect(wrapper.find('a').prop('href')).toEqual(
        "https://www.iana.org/whois?q=%3Cscript%3Ealert('XSS')%3C/script%3E"
      );
    });
  });
});
