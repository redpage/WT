using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Ebest.Api.RNEbestApi
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNEbestApiModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNEbestApiModule"/>.
        /// </summary>
        internal RNEbestApiModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNEbestApi";
            }
        }
    }
}
