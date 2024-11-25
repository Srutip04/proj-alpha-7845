import React, { useState } from 'react';
import { Save } from 'lucide-react';

export const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'RBAC System',
    maintenanceMode: false,
    userRegistration: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordPolicy: {
      minLength: 8,
      requireNumbers: true,
      requireSymbols: true,
      requireUppercase: true,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update
    console.log('Settings updated:', settings);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                General Settings
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Basic system configuration options.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="siteName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Site Name
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) =>
                      setSettings({ ...settings, siteName: e.target.value })
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="sessionTimeout"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    name="sessionTimeout"
                    id="sessionTimeout"
                    value={settings.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        sessionTimeout: parseInt(e.target.value),
                      })
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="maintenanceMode"
                        name="maintenanceMode"
                        type="checkbox"
                        checked={settings.maintenanceMode}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            maintenanceMode: e.target.checked,
                          })
                        }
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="maintenanceMode"
                        className="font-medium text-gray-700"
                      >
                        Maintenance Mode
                      </label>
                      <p className="text-gray-500">
                        Enable to temporarily disable access to the system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Security Settings
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Configure security-related options.
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="maxLoginAttempts"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Max Login Attempts
                  </label>
                  <input
                    type="number"
                    name="maxLoginAttempts"
                    id="maxLoginAttempts"
                    value={settings.maxLoginAttempts}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        maxLoginAttempts: parseInt(e.target.value),
                      })
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Password Policy
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="requireNumbers"
                            name="requireNumbers"
                            type="checkbox"
                            checked={settings.passwordPolicy.requireNumbers}
                            onChange={(e) =>
                              setSettings({
                                ...settings,
                                passwordPolicy: {
                                  ...settings.passwordPolicy,
                                  requireNumbers: e.target.checked,
                                },
                              })
                            }
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="requireNumbers"
                            className="font-medium text-gray-700"
                          >
                            Require Numbers
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="requireSymbols"
                            name="requireSymbols"
                            type="checkbox"
                            checked={settings.passwordPolicy.requireSymbols}
                            onChange={(e) =>
                              setSettings({
                                ...settings,
                                passwordPolicy: {
                                  ...settings.passwordPolicy,
                                  requireSymbols: e.target.checked,
                                },
                              })
                            }
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="requireSymbols"
                            className="font-medium text-gray-700"
                          >
                            Require Symbols
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};