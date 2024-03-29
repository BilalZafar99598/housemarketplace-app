import { useState, useEffect  } from "react";
import { 
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
 } from 'firebase/firestore';
import { db } from "../firebase.config";
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";


const Offers = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // Get a reference
                const listingsRef = collection(db, 'listings');

                // Create a query
                const q = query(
                    listingsRef, 
                    where('offer', '==', true), 
                    orderBy('timestamp', 'desc'),
                    limit(10)
                )

                // Execute a query
                const querySnap = await getDocs(q);

                let listings = [];

                querySnap.forEach((doc) => {
                    // console.log(doc.data());
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setListings(listings);
                setLoading(false);
            } catch (error) {
                toast.error('Could not fetch listings');
            }
        }
        fetchListings();
    }, []);

  return <div className="category">
    <header>
        <p className="pageHeader">
            Offers
        </p>
    </header>
    {loading ? (
    <Spinner/>
    ) : listings && listings.length > 0 ? (
    <>
        <main>
            <ul className="categoryListings">
                {listings.map((listing) => (
                    <ListingItem key={listing.id} listing={listing.data} id={listing.id}/>
                ))}
            </ul>
        </main>
    </> 
    ): <p>There is no current Offers</p> }
  </div>
}

export default Offers
