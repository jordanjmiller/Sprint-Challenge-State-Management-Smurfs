1. What problem does the context API help solve?

Prop drill to the provider and then link any components nested inside directly rather than drilling down through multiple components

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like functions to send instructions to the reducer. reducers are for modifying state. The redux store is where state is held. The store is known as the single source of truth because it can only be modified through actions and reducers, and data flows only one way from the ui to the action to the reducer to the store and back to the ui.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, accessible by all components linked to it. Component state is local, only accessible by that component.
Use component state if the data does not need to be used by multiple components. It's faster to set up and easier to manage.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows us to run async actions. it allows us to chain actions with thunks.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, for global actions and reducer use
