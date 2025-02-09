import { CosmosSDK } from '../../../../sdk';
import { QueryApi } from '../../../../openapi/api';

export function channels(
  sdk: CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).channels(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function channel(sdk: CosmosSDK, channelID: string, portID: string) {
  return new QueryApi(undefined, sdk.url).channel(channelID, portID);
}

export function channelClientState(sdk: CosmosSDK, channelID: string, portID: string) {
  return new QueryApi(undefined, sdk.url).channelClientState(channelID, portID);
}

export function channelConsensusState(sdk: CosmosSDK, channelID: string, portID: string, revisionNumber: bigint, revisionHeight: bigint) {
  return new QueryApi(undefined, sdk.url).channelConsensusState(channelID, portID, revisionNumber.toString(), revisionHeight.toString());
}

export function nextSequenceReceive(sdk: CosmosSDK, channelID: string, portID: string) {
  return new QueryApi(undefined, sdk.url).nextSequenceReceive(channelID, portID);
}

export function packetAcknowledgements(
  sdk: CosmosSDK,
  channelID: string,
  portID: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).packetAcknowledgements(
    channelID,
    portID,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function packetAcknowledgement(sdk: CosmosSDK, channelID: string, portID: string, sequence: bigint) {
  return new QueryApi(undefined, sdk.url).packetAcknowledgement(channelID, portID, sequence.toString());
}

export function packetCommitments(
  sdk: CosmosSDK,
  channelID: string,
  portID: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).packetCommitments(
    channelID,
    portID,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function unreceivedAcks(sdk: CosmosSDK, channelID: string, portID: string, packetAckSequences: bigint[]) {
  return new QueryApi(undefined, sdk.url).unreceivedAcks(
    channelID,
    portID,
    packetAckSequences.map((sequence) => sequence.toString()),
  );
}

export function unreceivedPackets(sdk: CosmosSDK, channelID: string, portID: string, packetAckSequences: bigint[]) {
  return new QueryApi(undefined, sdk.url).unreceivedPackets(
    channelID,
    portID,
    packetAckSequences.map((sequence) => sequence.toString()),
  );
}

export function packetCommitment(sdk: CosmosSDK, channelID: string, portID: string, sequence: bigint) {
  return new QueryApi(undefined, sdk.url).packetCommitment(channelID, portID, sequence.toString());
}

export function packetReceipt(sdk: CosmosSDK, channelID: string, portID: string, sequence: bigint) {
  return new QueryApi(undefined, sdk.url).packetReceipt(channelID, portID, sequence.toString());
}

export function connectionChannels(
  sdk: CosmosSDK,
  connection: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).connectionChannels(
    connection,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
