# Master-Detail Template for React Native apps

![](https://github.com/hramos/react-native-template-master-detail/raw/master/.github/MasterScreen.ios.png?raw=true)
![](https://github.com/hramos/react-native-template-master-detail/raw/master/.github/MasterScreen.android.png?raw=true)

This is a basic template that provides a minimal master-detail app, similar to Xcode's Master Detail template and Android Studio's Master Detail Layout template. It uses `react-navigation` and the 0.43 Release Candidate.

- `MainNavigator.js` - Top-level element rendered by `index.ios.js` and `index.android.js`. Configures `react-navigation` and its routes.
- `MasterScreen.js` - Displays a list of items using `FlatList`.
- `DetailScreen.js` - Displays additional information on an item selected from the `MasterScreen`.

## Usage

You can use the template by running:

```
react-native init --template master-detail
```

Note that this is by convention. The package name is `react-native-template-master-detail`, and the template can be used by passing `master-detail` to the `--template` flag when running `react-native init`.
