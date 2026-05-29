(() => {
    var e = {
            4157: e => {
                "use strict";
                e.exports = require("electron")
            }
        },
        i = {};
    const {
        contextBridge: n,
        ipcRenderer: s
    } = function n(s) {
        var a = i[s];
        if (void 0 !== a) return a.exports;
        var o = i[s] = {
            exports: {}
        };
        return e[s](o, o.exports, n), o.exports
    }(4157);
    n.exposeInMainWorld("launcherAPI", {
        openUrlInBrowser: e => s.send("open-url", e),
        closeApp: () => s.send("close-app"),
        maximizeWindow: () => s.send("maximize-window"),
        minimizeWindow: () => s.send("minimize-window"),
        validateAndStartGame: (e, i, n, a, o, r, t) => s.send("validateAndStartGame", e, i, n, a, o, r, t),
        validateGameFiles: e => s.send("validateGameFiles", e),
        repairGameFiles: (e, i) => s.send("repairGameFiles", e, i),
        installDrivers: e => s.send("installDrivers", e),
        handleDriverInstallProgress: e => s.on("drivers:installProgress", e),
        handleProgress: e => s.on("progress-update", e),
        handleUpdateModalVisibility: e => s.on("update-modal-visibility", e),
        handleNetworkErrorModalVisibility: e => s.on("network-error-modal-visibility", e),
        handleRepairModalVisibility: e => s.on("repair-modal-visibility", e),
        handleAppVersionUpdate: e => s.on("update-app-version", e),
        getSettings: e => s.invoke("getSettings", e),
        setSettings: (e, i) => s.send("setSettings", e, i),
        exitLauncher: e => s.send("exitLauncher", e),
        selectDirectory: (e = "") => s.invoke("directory:select", e),
        openGameFolder: (e = "") => s.send("openGameFolder", e),
        restartAsAdmin: () => s.send("restartAsAdmin"),
        handleRestartAsAdminModalVisibility: e => s.on("restart-as-admin-modal-visibility", e),
        toggleAutoLaunch: e => s.send("toggleAutoLaunch", e),
        handleAutoLaunchModalVisibility: e => s.on("auto-launch-modal-visibility", e),
        handleUpdateDownloadInProgress: e => s.on("update-download-in-progress", e),
        handleUnknownErrorModalVisibility: e => s.on("unknown-error-modal-visibility", e),
        requestMods: e => s.send("mods:request", e),
        handleModsInitialize: e => s.on("mods:load", e),
        onModInstallChange: e => s.on("mod:onInstallChange", e),
        installMod: (e, i) => s.send("mod:install", e, i),
        uninstallMod: (e, i) => s.send("mod:uninstall", e, i),
        handleCrashRepairModalVisibility: e => s.on("crash-repair-modal-visibility", e),
        sendCrashRepairModalResponse: e => s.send("crash-repair-modal-response", e)
    })
})();