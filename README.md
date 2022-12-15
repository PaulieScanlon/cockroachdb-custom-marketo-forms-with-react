# cockroachdb-marketo-test-forms

Next.js Test App for Marketo Forms + Tailwind:
[https://www.cockroachlabs.com/test/marketo-test-form](https://www.cockroachlabs.com/test/marketo-test-form)

## Marketo

For this to work someone who know's Marketo needs to have already setup a "form" and can provide you with a `formId`

It's important the fields the form has been setup with match field `vals` you send via the API.

For example: The Newsletter form in Marketo is configured to only accept an `email` field. In `newsletter-form.js`
you'll see the only` vals` that are submited are for the `email` field.

```javascript
window.MktoForms2.getForm(process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID).vals({ Email: email }).submit()
```

## Environment Variables

You'll need at least x3 environment variables to make this work, these are: (the `NEXT_PUBLIC` prefix is specific to
usage with Next.js)

```shell
NEXT_PUBLIC_BASE_URL=go.cockroachlabs.com
NEXT_PUBLIC_MUNCHKIN_ID=350-QIN-827
NEXT_PUBLIC_NEWSLETTER_FORM_ID=1234
```

### BASE_URL

You can normally find this by inspecting your companies main webiste, look in the `<head>`, you should see something
like this:

```javascript
<script src="//go.cockroachlabs.com/js/forms2/js/forms2.min.js"></script>
```

The `BASE_URL` is just this bit: `go.cockroachlabs.com`

### MUNCHKIN_ID

Same as with the `BASE_URL` this `id` is also public. You can find it in the `<head>` by looking for the something like
this:

```javascript
function b() {
  !1 === c && ((c = !0), Munchkin.init('350-QIN-827'))
}
```

### FORM_ID

This isn't public. You will need someone who understands Marketo to provide you with this. You may be giveen something
like this ` mktoForm_1234`, you only need the numbers, E.g: `1234`

## Usage

TBD: The `<MarketoForm />` component must be rendered on the page but it's hidden! If you want to see the raw Marketo
Form you can se the `debug` prop to `true`, the default is `false`.

```javascript
<div>
  <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
  <NewsletterForm />
</div>
```
