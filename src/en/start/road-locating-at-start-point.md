# Road Locating at Start Point

![](/images/road-at-startpoint-example.jpg)

It's no easy thing to locate the first object since the start point has an irregular shape. Taking one-unit-width road as an example, here we provide 3 most commonly used schemes for reference. There's no good and bad between them, and you can also use your own scheme.

## Concatenating Scheme

In this most intuitive scheme, the road end can either contact or reach under the start point.

For the terminal in the header image, its reference coordinate is `X = 0, Y = -0.75, Z = 3.75`.

## Inlaying Scheme

In this scheme, the road is inlaid into the start point and extends its border pattern in an elegant way.

For the terminal in the header image, its reference coordinate is `X = 0, Y = -0.4, Z = 2`.

## Gridding Scheme

In this scheme, the road is snapped to the grid, which can later simplify coordinate calculations of objects.

For the terminal in the header image, its reference coordinate is `X = 0, Y = -1, Z = 4`.
