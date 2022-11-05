const EVENTS = {
  PluginRepoRegistered: "PluginRepoRegistered",
  DAORegistered: "DAORegistered",
  InstallationPrepared: "InstallationPrepared",
  InstallationApplied: "InstallationApplied",
  Revoked: "Revoked",
  Granted: "Granted",
};

export async function parseNewDAOTx(tx: any) {
  const data = await tx.wait();
  const { events } = data;
  const DAORegistered = events.find(
    ({ event }: { event: any }) => event === EVENTS.DAORegistered
  )?.args;

  const Installation = events.find(
    ({ event }: { event: any }) => event === EVENTS.InstallationPrepared
  )?.args;

  return {
    ...DAORegistered,
    ...Installation,
  };
}
