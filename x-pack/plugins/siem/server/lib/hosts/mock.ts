/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { RequestOptions } from '../framework';

import { HostDetailsRequestOptions, HostLastFirstSeenRequestOptions } from '.';

export const mockGetHostsOptions: RequestOptions = {
  sourceConfiguration: {
    logAlias: 'filebeat-*',
    auditbeatAlias: 'auditbeat-*',
    packetbeatAlias: 'packetbeat-*',
    winlogbeatAlias: 'winlogbeat-*',
    fields: {
      container: 'docker.container.name',
      host: 'beat.hostname',
      message: ['message', '@message'],
      pod: 'kubernetes.pod.name',
      tiebreaker: '_doc',
      timestamp: '@timestamp',
    },
  },
  timerange: { interval: '12h', to: 1554824274610, from: 1554737874610 },
  pagination: { limit: 10, cursor: null, tiebreaker: null },
  filterQuery: {},
  fields: [
    'totalCount',
    '_id',
    'host.id',
    'host.name',
    'host.os.name',
    'host.os.version',
    'edges.cursor.value',
    'pageInfo.endCursor.value',
    'pageInfo.hasNextPage',
  ],
};

export const mockGetHostsRequest = {
  params: {},
  payload: {
    operationName: 'GetHostsTableQuery',
    variables: {
      sourceId: 'default',
      timerange: { interval: '12h', from: 1554737729201, to: 1554824129202 },
      pagination: { limit: 10, cursor: null, tiebreaker: null },
      filterQuery: '',
    },
    query:
      'query GetHostsTableQuery($sourceId: ID!, $timerange: TimerangeInput!, $pagination: PaginationInput!, $filterQuery: String) {\n  source(id: $sourceId) {\n    id\n    Hosts(timerange: $timerange, pagination: $pagination, filterQuery: $filterQuery) {\n      totalCount\n      edges {\n        node {\n          _id\n          host {\n            id\n            name\n            os {\n              name\n              version\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        cursor {\n          value\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        endCursor {\n          value\n          __typename\n        }\n        hasNextPage\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
  },
  query: {},
};

export const mockGetHostsResponse = {
  took: 1695,
  timed_out: false,
  _shards: {
    total: 59,
    successful: 59,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 4018586,
      relation: 'eq',
    },
    max_score: null,
    hits: [],
  },
  aggregations: {
    host_data: {
      doc_count_error_upper_bound: -1,
      sum_other_doc_count: 3082125,
      buckets: [
        {
          key: 'beats-ci-immutable-centos-7-1554823376629262884',
          doc_count: 991,
          lastSeen: {
            value: 1554823916544,
            value_as_string: '2019-04-09T15:31:56.544Z',
          },
          host_os_version: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: '7 (Core)',
                doc_count: 991,
                timestamp: {
                  value: 1554823916544,
                  value_as_string: '2019-04-09T15:31:56.544Z',
                },
              },
            ],
          },
          firstSeen: {
            value: 1554823396740,
            value_as_string: '2019-04-09T15:23:16.740Z',
          },
          host_os_name: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'CentOS Linux',
                doc_count: 991,
                timestamp: {
                  value: 1554823916544,
                  value_as_string: '2019-04-09T15:31:56.544Z',
                },
              },
            ],
          },
          host_name: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'beats-ci-immutable-centos-7-1554823376629262884',
                doc_count: 991,
                timestamp: {
                  value: 1554823916544,
                  value_as_string: '2019-04-09T15:31:56.544Z',
                },
              },
            ],
          },
          host_id: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'f85edea1973c34f862c376cac4ebc777',
                doc_count: 991,
                timestamp: {
                  value: 1554823916544,
                  value_as_string: '2019-04-09T15:31:56.544Z',
                },
              },
            ],
          },
        },
        {
          key: 'beats-ci-immutable-centos-7-1554823376629299914',
          doc_count: 571,
          lastSeen: {
            value: 1554823916302,
            value_as_string: '2019-04-09T15:31:56.302Z',
          },
          host_os_version: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: '7 (Core)',
                doc_count: 571,
                timestamp: {
                  value: 1554823916302,
                  value_as_string: '2019-04-09T15:31:56.302Z',
                },
              },
            ],
          },
          firstSeen: {
            value: 1554823398628,
            value_as_string: '2019-04-09T15:23:18.628Z',
          },
          host_os_name: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'CentOS Linux',
                doc_count: 571,
                timestamp: {
                  value: 1554823916302,
                  value_as_string: '2019-04-09T15:31:56.302Z',
                },
              },
            ],
          },
          host_name: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'beats-ci-immutable-centos-7-1554823376629299914',
                doc_count: 571,
                timestamp: {
                  value: 1554823916302,
                  value_as_string: '2019-04-09T15:31:56.302Z',
                },
              },
            ],
          },
          host_id: {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'f85edea1973c34f862c376cac4ebc777',
                doc_count: 571,
                timestamp: {
                  value: 1554823916302,
                  value_as_string: '2019-04-09T15:31:56.302Z',
                },
              },
            ],
          },
        },
      ],
    },
    host_count: {
      value: 1627,
    },
  },
};

export const mockGetHostsResult = {
  edges: [
    {
      node: {
        _id: 'beats-ci-immutable-centos-7-1554823376629262884',
        host: {
          id: 'f85edea1973c34f862c376cac4ebc777',
          name: 'beats-ci-immutable-centos-7-1554823376629262884',
          os: {
            name: 'CentOS Linux',
            version: '7 (Core)',
          },
        },
      },
      cursor: {
        value: 'beats-ci-immutable-centos-7-1554823376629262884',
        tiebreaker: null,
      },
    },
    {
      node: {
        _id: 'beats-ci-immutable-centos-7-1554823376629299914',
        host: {
          id: 'f85edea1973c34f862c376cac4ebc777',
          name: 'beats-ci-immutable-centos-7-1554823376629299914',
          os: {
            name: 'CentOS Linux',
            version: '7 (Core)',
          },
        },
      },
      cursor: {
        value: 'beats-ci-immutable-centos-7-1554823376629299914',
        tiebreaker: null,
      },
    },
  ],
  totalCount: 1627,
  pageInfo: {
    hasNextPage: false,
    endCursor: {
      value: '10',
    },
  },
};

export const mockGetHostDetailsOptions: HostDetailsRequestOptions = {
  sourceConfiguration: {
    logAlias: 'filebeat-*',
    auditbeatAlias: 'auditbeat-*',
    packetbeatAlias: 'packetbeat-*',
    winlogbeatAlias: 'winlogbeat-*',
    fields: {
      container: 'docker.container.name',
      host: 'beat.hostname',
      message: ['message', '@message'],
      pod: 'kubernetes.pod.name',
      tiebreaker: '_doc',
      timestamp: '@timestamp',
    },
  },
  timerange: { interval: '12h', to: 1554824274610, from: 1554737874610 },
  fields: [
    '_id',
    'host.architecture',
    'host.id',
    'host.ip',
    'host.mac',
    'host.name',
    'host.os.family',
    'host.os.name',
    'host.os.platform',
    'host.os.version',
    'host.os.__typename',
    'host.type',
    'host.__typename',
    '__typename',
  ],
  hostName: 'siem-es',
};

export const mockGetHostDetailsRequest = {
  params: {},
  payload: {
    operationName: 'GetHostDetailsQuery',
    variables: { sourceId: 'default', hostName: 'siem-es' },
    query:
      'query GetHostDetailsQuery($sourceId: ID!, $hostName: String!) {\n  source(id: $sourceId) {\n    id\n    HostDetails(hostName: $hostName) {\n      _id\n      host {\n        architecture\n        id\n        ip\n        mac\n        name\n        os {\n          family\n          name\n          platform\n          version\n          __typename\n        }\n        type\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
  },
  query: {},
};

export const mockGetHostDetailsResponse = {
  took: 2205,
  timed_out: false,
  _shards: { total: 59, successful: 59, skipped: 0, failed: 0 },
  hits: { total: { value: 611894, relation: 'eq' }, max_score: null, hits: [] },
  aggregations: {
    host_mac: { doc_count_error_upper_bound: 0, sum_other_doc_count: 0, buckets: [] },
    host_ip: { doc_count_error_upper_bound: 0, sum_other_doc_count: 0, buckets: [] },
    cloud_machine_type: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'projects/189716325846/machineTypes/custom-4-16384',
          doc_count: 611816,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
        {
          key: 'projects/189716325846/machineTypes/custom-4-8192',
          doc_count: 78,
          timestamp: { value: 1550807734650, value_as_string: '2019-02-22T03:55:34.650Z' },
        },
      ],
    },
    host_os_version: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: '9 (stretch)',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_architecture: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'x86_64',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_os_platform: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'debian',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_os_name: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'Debian GNU/Linux',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_os_family: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'debian',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_name: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'siem-es',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
    host_id: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'b6d5264e4b9c8880ad1053841067a4a6',
          doc_count: 611894,
          timestamp: { value: 1554826117972, value_as_string: '2019-04-09T16:08:37.972Z' },
        },
      ],
    },
  },
};

export const mockGetHostDetailsResult = {
  _id: 'siem-es',
  host: {
    architecture: 'x86_64',
    id: 'b6d5264e4b9c8880ad1053841067a4a6',
    ip: [],
    mac: [],
    name: 'siem-es',
    os: {
      family: 'debian',
      name: 'Debian GNU/Linux',
      platform: 'debian',
      version: '9 (stretch)',
    },
    type: 'projects/189716325846/machineTypes/custom-4-16384',
  },
};

export const mockGetHostLastFirstSeenOptions: HostLastFirstSeenRequestOptions = {
  sourceConfiguration: {
    logAlias: 'filebeat-*',
    auditbeatAlias: 'auditbeat-*',
    packetbeatAlias: 'packetbeat-*',
    winlogbeatAlias: 'winlogbeat-*',
    fields: {
      container: 'docker.container.name',
      host: 'beat.hostname',
      message: ['message', '@message'],
      pod: 'kubernetes.pod.name',
      tiebreaker: '_doc',
      timestamp: '@timestamp',
    },
  },
  hostName: 'siem-es',
};

export const mockGetHostLastFirstSeenRequest = {
  params: {},
  payload: {
    operationName: 'GetHostLastFirstSeenQuery',
    variables: { sourceId: 'default', hostName: 'siem-es' },
    query:
      'query GetHostLastFirstSeenQuery($sourceId: ID!, $hostName: String!) {\n  source(id: $sourceId) {\n    id\n    HostLastFirstSeen(hostName: $hostName) {\n      firstSeen\n      lastSeen\n      __typename\n    }\n    __typename\n  }\n}\n',
  },
  query: {},
};

export const mockGetHostLastFirstSeenResponse = {
  took: 60,
  timed_out: false,
  _shards: {
    total: 59,
    successful: 59,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 612092,
      relation: 'eq',
    },
    max_score: null,
    hits: [],
  },
  aggregations: {
    lastSeen: {
      value: 1554826692178,
      value_as_string: '2019-04-09T16:18:12.178Z',
    },
    firstSeen: {
      value: 1550806892826,
      value_as_string: '2019-02-22T03:41:32.826Z',
    },
  },
};
