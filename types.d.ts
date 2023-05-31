type Investment = {
  id: string
  investment: string
  value: 0
  createdAt: string
  updatedAt: string
  deletedAt: string
}

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

type CreateInvestment = {
  investment: string
  value: number
}

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type User = {
  id: 1
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
